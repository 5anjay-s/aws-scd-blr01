import { createContext, useContext, useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { useButtonAnimation } from './useButtonAnimation';
import { cleanSectionUrl, isNavigationActive, resolveLocation } from '../navigation';
import { HeaderNavigationContext, NavigationLocationContext } from './NavigationState';

export type NavigationOptions = { replace?: boolean; origin?: { x: number; y: number } };
export const NavigationContext = createContext<(href: string, options?: NavigationOptions) => void>(() => {});

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  buttonTone?: 'orange' | 'navy' | 'violet' | 'white';
  hoverTone?: 'orange' | 'cyan' | 'violet' | 'lime';
};

export function SiteLink({ href, children, className, buttonTone, hoverTone, ...props }: SiteLinkProps) {
  const navigate = useContext(NavigationContext);
  const inHeader = useContext(HeaderNavigationContext);
  const location = useContext(NavigationLocationContext);
  const ref = useRef<HTMLAnchorElement>(null);
  useButtonAnimation(ref, href);
  const appearance = {
    className: [className, buttonTone && 'site-button'].filter(Boolean).join(' '),
    'data-button-tone': buttonTone,
    'data-button-hover': hoverTone,
  };
  if (!href) {
    return <a {...props} {...appearance} ref={ref} role="link" aria-disabled="true" title="Link to be announced">{children}</a>;
  }
  const external = /^https?:/.test(href);
  const url = external ? null : cleanSectionUrl(new URL(href, window.location.href));
  const destination = url ? url.pathname + url.search + url.hash : href;
  const current = inHeader && url && isNavigationActive(resolveLocation(url), location)
    ? (location.path === '/' ? 'location' : 'page') : undefined;
  return <a {...props} {...appearance} ref={ref} href={destination} target={external ? '_blank' : undefined}
    aria-current={props['aria-current'] ?? current}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={(event) => {
      if (!external && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        const bounds = event.currentTarget.getBoundingClientRect();
        navigate(destination, { origin: event.detail === 0
          ? { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 }
          : { x: event.clientX, y: event.clientY } });
      }
    }}>{children}</a>;
}

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & { checked: boolean };
export function SiteCheckbox({ checked, children, ...props }: CheckboxProps) {
  return <button {...props} type="button" role="checkbox" aria-checked={checked}
    aria-label="I've completed my Meetup RSVP">{children}</button>;
}
