import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/ShowScraper'>
      <Routes>
        <Route path="/" element={<App route='ListView' />} />
        <Route path="/ListView" element={<App route='ListView' />} />
        <Route path="/VenuesListView" element={<App route='VenuesListView' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
