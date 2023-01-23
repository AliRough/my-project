import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>
);

