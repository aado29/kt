import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from './views/home/HomeView';
import EquipmentView from './views/equipment/EquipmentView';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeView} />
        <Route path="/equipos" component={EquipmentView} />
      </div>
    </Router>
  );
}

export default App;
