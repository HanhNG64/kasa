import './utils/style/index.scss';
import React from 'react';
import ThemeProvider from './utils/context/themeContext.jsx';
import AppRouter from './appRouter.jsx';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
);
