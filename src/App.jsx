import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Examcell1 from './Components/examcell1';
import Examcell2 from './Components/examcell2';
import Examcell3 from './Components/examcell3';
import Examcell4 from './Components/examcell4';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/examcell1" element={<Examcell1/>} />
        <Route path="/examcell2" element={<Examcell2/>} />
        <Route path="/examcell3" element={<Examcell3/>} />
        <Route path="/examcell4" element={<Examcell4/>} />
      </Routes>
  </Router>
);
}

export default App
