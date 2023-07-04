import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Normalize />
    <App />
  </BrowserRouter>
);
