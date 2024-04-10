import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import React from 'react';
import Home from './pages/homePage/homePage.jsx';
import About from './pages/aboutPage/aboutPage.jsx';
import Appartment from './pages/logementPage/logementPage.jsx';

import ErrorPage from './pages/errorPage/errorPage.jsx';
import Layout from './components/layout/layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        // path: '/appartment/:id',
        path: 'appartment',
        element: <Appartment />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
