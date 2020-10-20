
import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from './components/Navbar'
import Login from './components/login'
import './App.css';

class App extends PureComponent {

  render() {
  return (
    <Fragment>
    <Router>
      <Route path="/" render={props => <NavBar {...props}/>} />
      <Route exact path="/"> <Redirect to="/home"/></Route>
      <Route exact path="/login" render={props => <Login {...props}/>} />
    </Router>
  </Fragment>
  )
  }
}

export default App;
