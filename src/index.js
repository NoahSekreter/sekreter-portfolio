import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/0-global/global.scss'
import App from './components/3-sections/app/app.js';
import Toolbar from './components/3-sections/toolbar/toolbar.js';
import BlueScreen from './components/2-blocks/blue-screen/blue-screen.js';
// import reportWebVitals from './templates/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BlueScreen />
    <Toolbar />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
