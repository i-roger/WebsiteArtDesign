import Bar from './components/bar.js';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home.js'
import Secret from './pages/secret.js'
import Vip from './pages/vip.js';
function App() {
  return (
    <>
      <Router>
        <Bar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/secret" element={<Secret />} />
                <Route path="/vip" element={<Vip />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
