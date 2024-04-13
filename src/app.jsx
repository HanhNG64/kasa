import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from './pages/homePage/homePage.jsx';
import About from './pages/aboutPage/aboutPage.jsx';
import Logement from './pages/logementPage/logementPage.jsx';

import ErrorPage from './pages/errorPage/errorPage.jsx';
import Layout from './components/layout/layout.jsx';
import './components/layout/layout.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
