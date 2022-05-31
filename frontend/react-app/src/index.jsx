import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="https://maxpleaner.github.io/ShowScraper">
      <Routes>
        <Route path="/" element={<App route='ListView' />} />
        <Route path="/ListView" element={<App route='ListView' />} />
        <Route path="/VenuesListView" element={<App route='VenuesListView' />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
