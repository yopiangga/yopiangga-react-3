import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import About from './pages/About';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
