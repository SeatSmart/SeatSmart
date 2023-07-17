import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/home';
import Examcell1 from './Components/examcell1';
import Examcell2 from './Components/examcell2';
import Examcell3 from './Components/examcell3';
import Examcell4 from './Components/examcell4';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/examcell1" component={Examcell1} />
      <Route path="/examcell2" component={Examcell2} />
      <Route path="/examcell3" component={Examcell3} />
      <Route path="/examcell4" component={Examcell4} />
    </Switch>
  </Router>
);
}

export default App
