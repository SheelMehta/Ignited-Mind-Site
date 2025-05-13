import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { IdeasProvider } from './context/IdeasContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <IdeasProvider>
    <App />
  </IdeasProvider>
);
