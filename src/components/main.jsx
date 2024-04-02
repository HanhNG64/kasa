import React from 'react';
import { Outlet } from 'react-router-dom';
import '../utils/main.scss';

function Main() {
  return <main className="Main">{<Outlet />}</main>;
}

export default Main;
