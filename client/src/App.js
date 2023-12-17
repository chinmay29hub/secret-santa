import React, { useState } from 'react';
import './App.css';
import Snowfall from 'react-snowfall'
// import Snowfall from './components/Snowfall';
import GiftBoxAnimation from "./GiftBoxAnimation";
// import Routes from './Routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Original from './Original';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Original />} />
        <Route path="/gift" element={<GiftBoxAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
