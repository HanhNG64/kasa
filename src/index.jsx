import React from 'react';
import KasaRoutes from './utils/kasaRoutes.jsx';
import './utils/index.scss';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './utils/context/themeContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <KasaRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);
