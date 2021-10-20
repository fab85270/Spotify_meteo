
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SpotiTherLayout from './components/SpotiTherLayout/SpotiTherLayout';
import About from './pages/About';
import Callback from './pages/Callback';



function App() {
  return (
    <AccessTokenContextProvider>
      <AccessTokenContext.Provider>
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
      </AccessTokenContext.Provider>
    </AccessTokenContextProvider>
  );
}

export default App; // Ceci permet d'avoir le composant app dans toute l'application.
