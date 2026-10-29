import { createContext, useContext, useEffect, useId, useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { gsap, useReducedMotion } from './animation';
import { HeaderNavigationContext, NavigationLocationContext } from './NavigationState';
import { SiteLink } from './SiteLink';
import { RegistrationButton } from './RegistrationButton';
import { useNavigationMotion } from './useNavigationMotion';

export const HeaderHostContext = createContext<HTMLElement | null>(null);

const menuLinks = [
  ['/#experience', 'Experience'],
  ['/tracks', 'Tracks'],
  ['/#speakers', 'Speakers'],
  ['/#community', 'Community'],
  ['/organisers', 'Organisers'],
];

// Keep the original desktop navigation and share one mobile menu across pages.
export function SiteHeader({ children, ...props }: HTMLAttributes<HTMLElement>) {
  const host = useContext(HeaderHostContext);
  const location = useContext(NavigationLocationContext);
  const [open, setOpen] = useState(false);
  const [menuPresent, setMenuPresent] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  useNavigationMotion(navRef, indicatorRef, location, Boolean(host));

  useEffect(() => { setOpen(false); }, [location.path, location.anchor]);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1200px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (reducedMotion) { setMenuPresent(open); return; }
    if (open) setMenuPresent(true);
    else if (!menuPresent) return;
    const context = gsap.context(() => {
      if (open) {
        gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
          { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 0.32, ease: 'power3.out' });
        gsap.fromTo('.site-menu-link, .site-menu > .site-button', { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.03, delay: 0.08, ease: 'power3.out' });
      } else {
        gsap.to(menu, { clipPath: 'inset(0 0 100% 0)', opacity: 0, duration: 0.2,
          ease: 'power2.in', onComplete: () => setMenuPresent(false) });
      }
    }, menuRef);
    return () => context.revert();
  }, [open, reducedMotion]);

  return host ? createPortal(<HeaderNavigationContext.Provider value={true}>
    <nav aria-label="Main navigation" {...props} ref={navRef} data-menu-open={open}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={event => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onClickCapture={event => {
        if (open && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
          && event.target instanceof Element && event.target.closest('a[href]')) {
          setOpen(false);
          toggleRef.current?.focus({ preventScroll: true });
        }
      }}>
      {children}
      <span ref={indicatorRef} className="site-nav-indicator" aria-hidden="true" />
      <button ref={toggleRef} type="button" className="site-menu-toggle" aria-expanded={open}
        aria-controls={menuId} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(value => !value)}>
        <span>{open ? 'Close' : 'Menu'}</span>
        <span className="site-menu-toggle-icon" aria-hidden="true"><span /><span /></span>
      </button>
      <div className="site-menu" id={menuId} ref={menuRef} hidden={!open && !menuPresent} inert={!open}>
        <p className="site-menu-label">EXPLORE THE DAY</p>
        <div className="site-menu-links">
          {menuLinks.map(([href, label], index) => <SiteLink className="site-menu-link" key={href} href={href}>
            <span className="site-menu-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span>{label}</span><span className="site-menu-arrow" aria-hidden="true">↗</span>
          </SiteLink>)}
        </div>
        <RegistrationButton />
      </div>
    </nav>
  </HeaderNavigationContext.Provider>, host) : null;
}
