
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SpotiTherLayout from './components/SpotiTherLayout/SpotiTherLayout';
import About from './pages/About';
import SpotiTherMe from './pages/SpotiTheirMe';
import {AccessTokenContextProvider} from './Context/AccessTokenContext';
import {BoutonContextProvider} from './Context/BoutonContext';
import { TraductionContextProvider } from './Context/TraductionContext';


function App() {
  return (
    <AccessTokenContextProvider>
      <BoutonContextProvider>
        <TraductionContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <SpotiTherLayout/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/spotiTherMe">
                <SpotiTherMe/>
              </Route>
            </Switch>
          </Router>
        </TraductionContextProvider>
      </BoutonContextProvider>
    </AccessTokenContextProvider>
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
