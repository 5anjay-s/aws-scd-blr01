import { createContext, useContext, type HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

export const HeaderHostContext = createContext<HTMLElement | null>(null);

// Keep each page's existing navigation inside the page-wide sticky header.
export function SiteHeader(props: HTMLAttributes<HTMLElement>) {
  const host = useContext(HeaderHostContext);
  return host ? createPortal(<nav aria-label="Main navigation" {...props} />, host) : null;
}
