import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';
import './layout.scss';

function Layout() {
  return (
    <>
      <Header />
      <main className="Main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
