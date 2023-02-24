import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BaseRouter from './pages/page';

export default function RouterBase() {
  return (
    <HashRouter>
      <Routes>
        {BaseRouter.map((item: any, index: number) => (
          <Route path={item.path} element={item.element} key={index} />
        ))}
      </Routes>
    </HashRouter>
  );
}
