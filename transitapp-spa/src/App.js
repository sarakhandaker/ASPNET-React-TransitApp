
import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import UserStops from './components/UserStops'
import './App.css';
import { useJwt } from "react-jwt";
const token = localStorage.getItem('token');

const App= () => {

  const { decodedToken } = useJwt(token);

  return (
    <Fragment>
    <Router>
      <Route path="/" render={props => <NavBar {...props} loggedIn={decodedToken}/>} />
      <Route path="/home" render={props => <Home {...props}/>} />
      <Route path="/search" render={props => <Search loggedIn={decodedToken} {...props}/>} />
      <Route path="/stops" render={props => <UserStops id={decodedToken? decodedToken.nameid : null} {...props}/>} />
      <Route exact path="/"> <Redirect to="/home"/></Route>
    </Router>
  </Fragment>
  )
}

export default App;
