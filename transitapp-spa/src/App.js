
import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from './components/Navbar'
import Home from './components/Home'
import './App.css';

class App extends PureComponent {

  state = {
    user: null
  }

  render() {
  return (
    <Fragment>
    <Router>
      <Route path="/" render={props => <NavBar {...props} user= {this.state.user} />} />
      <Route path="/" render={props => <Home {...props} user= {this.state.user}/>} />
      <Route exact path="/"> <Redirect to="/home"/></Route>
    </Router>
  </Fragment>
  )
  }
}

export default App;
