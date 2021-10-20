
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SpotiTherLayout from './components/SpotiTherLayout/SpotiTherLayout';
import About from './pages/About';
import Callback from './pages/Callback';
import {AccessTokenContextProvider} from './Context/AccessTokenContext';
import {BoutonContextProvider} from './Context/BoutonContext';



function App() {
  return (
    <AccessTokenContextProvider>
      <BoutonContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <SpotiTherLayout/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/callback">
              <Callback/>
            </Route>
          </Switch>
        </Router>
      </BoutonContextProvider>
    </AccessTokenContextProvider>
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
