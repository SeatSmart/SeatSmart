import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Examcell1 from './Components/examcell1';
import Examcell2 from './Components/examcell2';
import Examcell3 from './Components/examcell3';
import Examcell4 from './Components/examcell4';
import Excell2 from './Components/excel2';
import Excell3 from './Components/excel3';
import Invigilator1 from './Components/Invigilator1';
import Invigilator2 from './Components/Invigilator2';
import Examcell5 from './Components/examcell5';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/examcell1" element={<Examcell1/>} />
        <Route path="/examcell2" element={<Excell2/>} />
        <Route path="/examcell3" element={<Excell3/>} />
        <Route path="/examcell4" element={<Examcell4/>} />
        <Route path='/invigilator1' element ={<Invigilator1/>}/>
        <Route path='/invigilator2' element={<Invigilator2/>}/>
        <Route path='/examcell5' element={<Examcell5/>}/>
      </Routes>
  </Router>
);
}

export default App
