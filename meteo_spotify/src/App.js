
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SpotiTherLayout from './components/SpotiTherLayout/SpotiTherLayout';
import About from './pages/About';
import Callback from './pages/Callback';
import AccessTokenContextProvider from './pages/Context/AccessTokenContext';

function App() {
  return (
    <Router>
      <Switch>
        <AccessTokenContextProvider> 
        <Route exact path="/">
          <SpotiTherLayout/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/callback">
          <Callback/>
        </Route>
        </AccessTokenContextProvider>
      </Switch>
   
    </Router>
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
