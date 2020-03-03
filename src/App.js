import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import LoginView from './views/login/LoginView';
import HomeView from './views/home/HomeView';
import EquipmentView from './views/equipment/EquipmentView';
import PartsView from './views/parts/PartsView';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/equipos" component={EquipmentView} />
        <Route path="/repuestos" component={PartsView} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
