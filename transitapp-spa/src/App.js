
import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import NavBar from './components/Navbar'
import Home from './components/Container/Home'
import Search from './components/Container/Search'
import UserStops from './components/Container/UserStops'
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
      <Route path="/stops" render={props => <UserStops address={decodedToken? decodedToken.address : null} id={decodedToken? decodedToken.nameid : null} {...props}/>} />
      <Route exact path="/"> <Redirect to="/home"/></Route>
    </Router>
  </Fragment>
  )
}

export default App;
