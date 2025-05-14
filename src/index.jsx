import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { IdeasProvider } from './context/IdeasContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <IdeasProvider>
      <App />
    </IdeasProvider>
  </BrowserRouter>
);
