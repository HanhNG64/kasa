import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './utils/style/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
