
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Service from './pages/Service'
import SpotiTherMe from './pages/SpotiTheirMe';
import PageConnect from './pages/PageConnect';
import DisconnectPage from './pages/DisconnectPage';

import {AccessTokenContextProvider} from './Context/AccessTokenContext';
import {BoutonContextProvider} from './Context/BoutonContext';
import { TraductionContextProvider } from './Context/TraductionContext';
import PageMeteo from './components/PageMeteo/PageMeteo';
import { MeteoContextProvider } from './Context/MeteoContext';
import { DarkModeProvider } from './Context/DarkModeContext';


function App() {
  return (
    <AccessTokenContextProvider>
      <BoutonContextProvider>
        <TraductionContextProvider>
          <MeteoContextProvider>
            <DarkModeProvider>
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
                  <Route path="/disconnectPage">
                    <DisconnectPage/>
                  </Route>
                </Switch>
              </Router>
            </DarkModeProvider>
          </MeteoContextProvider>
        </TraductionContextProvider>
      </BoutonContextProvider>
    </AccessTokenContextProvider>
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
