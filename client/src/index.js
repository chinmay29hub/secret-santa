import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Snowfall from 'react-snowfall';
import GiftBoxAnimation from './GiftBoxAnimation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Snowfall
      snowflakeCount={50}
      speed={[0.5, 1]}
      wind={[1, 1]}
      radius={[0.5, 5]}
      />
    <App />
      {/* <GiftBoxAnimation /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
