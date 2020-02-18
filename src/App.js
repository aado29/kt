import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from './views/home/HomeView';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/inicio" component={HomeView} />
      </div>
    </Router>
  );
}

export default App;
