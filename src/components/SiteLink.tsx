import { createContext, useContext, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { cleanSectionUrl } from '../navigation';

export type NavigationOptions = { replace?: boolean };
export const NavigationContext = createContext<(href: string, options?: NavigationOptions) => void>(() => {});

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  buttonTone?: 'orange' | 'navy' | 'violet' | 'white';
  hoverTone?: 'orange' | 'cyan' | 'violet' | 'lime';
};

export function SiteLink({ href, children, className, buttonTone, hoverTone, ...props }: SiteLinkProps) {
  const navigate = useContext(NavigationContext);
  const appearance = {
    className: [className, buttonTone && 'site-button'].filter(Boolean).join(' '),
    'data-button-tone': buttonTone,
    'data-button-hover': hoverTone,
  };
  if (!href) {
    return <a {...props} {...appearance} role="link" aria-disabled="true" title="Link to be announced">{children}</a>;
  }
  const external = /^https?:/.test(href);
  const url = external ? null : cleanSectionUrl(new URL(href, window.location.href));
  const destination = url ? url.pathname + url.search + url.hash : href;
  return <a {...props} {...appearance} href={destination} target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    onClick={(event) => {
      if (!external && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        navigate(destination);
      }
    }}>{children}</a>;
}

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & { checked: boolean };
export function SiteCheckbox({ checked, children, ...props }: CheckboxProps) {
  return <button {...props} type="button" role="checkbox" aria-checked={checked}
    aria-label="I've completed my Meetup RSVP">{children}</button>;
}
