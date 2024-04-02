import React from 'react';
import Home from '../pages/homePage.jsx';
import About from '../pages/aboutPage.jsx';
import Appartment from '../pages/appartmentPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from '../pages/errorPage.jsx';
import Layout from '../components/layout.jsx';

function KasaRoutes() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="propos" element={<About />} />
            <Route path="appartment" element={<Appartment />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default KasaRoutes;
