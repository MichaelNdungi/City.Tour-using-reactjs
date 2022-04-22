import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tours from './components/pages/Tours';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
// import ReactCardSlider from './components/ReactCardSlider'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Tours' component={Tours} />
          <Route path='/About' component={About} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}

export default App;