import './utils/style/index.scss';
import React from 'react';
import ThemeProvider from './utils/context/themeContext.jsx';
import App from './app.jsx';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
