import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageMeteo from './components/PageMeteo/PageMeteo';

function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/">
          <PageMeteo/>
        </Route>
      </Switch>
  </Router>
  )
}


export default App;
