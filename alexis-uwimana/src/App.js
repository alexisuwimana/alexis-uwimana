import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {HashRouter, switch, Router } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="app">
      <HashRouter basename="/">
        <switch>
          <Router pathc>
          
          </Router>
        </switch>
      </HashRouter>

    </div>
  );
}

export default App;
