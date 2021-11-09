
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
<<<<<<< HEAD
import Service from './pages/Service';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SpotiTherLayout/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/Service">
          <Service/>
        </Route>
      </Switch>
    </Router>
=======
import Service from './pages/Service'
import SpotiTherMe from './pages/SpotiTheirMe';
import PageConnect from './pages/PageConnect';

import {AccessTokenContextProvider} from './Context/AccessTokenContext';
import {BoutonContextProvider} from './Context/BoutonContext';
import { TraductionContextProvider } from './Context/TraductionContext';
import PageMeteo from './components/PageMeteo/PageMeteo';
import { MeteoContextProvider } from './Context/MeteoContext';



function App() {
  return (
    <AccessTokenContextProvider>
      <BoutonContextProvider>
        <TraductionContextProvider>
          <MeteoContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/spotiTherMe">
                <SpotiTherMe/>
              </Route>
              <Route path="/meteo">
                <PageMeteo/>
              </Route>
              <Route path='/connectAPI'>
                  <PageConnect/>
              </Route>
              <Route path="/service">
                <Service/>
              </Route>
            </Switch>
          </Router>
          </MeteoContextProvider>
        </TraductionContextProvider>
      </BoutonContextProvider>
    </AccessTokenContextProvider>
>>>>>>> 7e0ed6919bc32257206bc0670493ac463993113a
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
