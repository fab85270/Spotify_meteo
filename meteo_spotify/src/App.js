
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SpotiTherLayout from './components/SpotiTherLayout/SpotiTherLayout';
import About from './pages/About';
import Service from './pages/Service';
function App() {
  return (
    <>
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
      <div className="listeningSong">
        <a>Son en cours de lecture</a>
        <p></p>
        <a>mettre lien appel api morceau en cours d'écoute</a>
      </div>
    </>
  );
}


export default App; // Ceci permet d'avoir le composant app dans toute l'application.
