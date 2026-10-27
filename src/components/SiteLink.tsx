import { createContext, useContext, type AnchorHTMLAttributes } from 'react';
import { isNavigationActive, resolveLinkUrl, resolveLocation } from '../navigation';
import { HeaderNavigationContext, NavigationLocationContext } from './NavigationState';

export type NavigationOptions = { replace?: boolean; origin?: { x: number; y: number } };
export const NavigationContext = createContext<(href: string, options?: NavigationOptions) => void>(() => {});

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  buttonTone?: 'orange' | 'navy' | 'violet' | 'white';
  hoverTone?: 'orange' | 'cyan' | 'violet' | 'lime';
};

export function SiteLink({ href, children, className, buttonTone, hoverTone, onClick, target, rel, ...props }: SiteLinkProps) {
  const navigate = useContext(NavigationContext);
  const inHeader = useContext(HeaderNavigationContext);
  const location = useContext(NavigationLocationContext);
  const appearance = {
    className: [className, buttonTone && 'site-button'].filter(Boolean).join(' '),
    'data-button-tone': buttonTone,
    'data-button-hover': hoverTone,
  };
  if (!href) {
    return <a {...props} {...appearance} role="link" aria-disabled="true" title="Link to be announced">{children}</a>;
  }
  const external = /^https?:/i.test(href);
  const nativeLink = /^(mailto:|tel:)/i.test(href);
  if (/^[a-z][a-z\d+.-]*:/i.test(href) && !external && !nativeLink) return <span className={className}>{children}</span>;
  const url = external || nativeLink || props.download !== undefined ? null : resolveLinkUrl(href, new URL(window.location.href));
  const destination = url ? url.pathname + url.search + url.hash : href;
  const current = inHeader && url && isNavigationActive(resolveLocation(url), location)
    ? (location.path === '/' ? 'location' : 'page') : undefined;
  return <a {...props} {...appearance} href={destination} target={target ?? (external ? '_blank' : undefined)}
    aria-current={props['aria-current'] ?? current}
    rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
    onClick={(event) => {
      onClick?.(event);
      if (!external && !nativeLink && !event.defaultPrevented && event.button === 0 && (!target || target === '_self')
        && props.download === undefined && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        const bounds = event.currentTarget.getBoundingClientRect();
        navigate(destination, { origin: event.detail === 0
          ? { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 }
          : { x: event.clientX, y: event.clientY } });
      }
    }}>{children}</a>;
}
