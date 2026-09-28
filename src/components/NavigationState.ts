import { createContext } from 'react';

export type NavigationLocation = { path: string; anchor: string };
export const NavigationLocationContext = createContext<NavigationLocation>({ path: '/', anchor: 'home' });
export const HeaderNavigationContext = createContext(false);
