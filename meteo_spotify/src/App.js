
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
<<<<<<< HEAD
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
=======
>>>>>>> 429a93f6c79ec8a50a486fcd53f4931212339570
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
<<<<<<< HEAD
>>>>>>> 7e0ed6919bc32257206bc0670493ac463993113a
=======
>>>>>>> 429a93f6c79ec8a50a486fcd53f4931212339570
  );
}


export default App; // Ceci permet d'avoir le composant app dans toute l'application.
