import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/azeret-mono/500.css';
import '@fontsource/geist-mono/300.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/700.css';
import '@fontsource/pixelify-sans/500.css';
import './styles/base.css';
import './styles/design.css';
import './styles/responsive-generated.css';
import './styles/responsive.css';
import './styles/interactions.css';
import './styles/event-content.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
