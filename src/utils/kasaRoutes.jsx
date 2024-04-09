import React from 'react';
import Home from '../pages/homePage/homePage.jsx';
import About from '../pages/aboutPage/aboutPage.jsx';
import Appartment from '../pages/logementPage/logementPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../pages/errorPage/errorPage.jsx';
import Layout from './layout.jsx';
import Main from '../components/main.jsx';

function KasaRoutes() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="appartment" element={<Appartment />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default KasaRoutes;
