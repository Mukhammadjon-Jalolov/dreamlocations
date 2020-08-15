import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState, useEffect } from "react";
import "./components/Header.css";
import { CSSTransition } from "react-transition-group";
import './App.css';


import App from './App'
import Sustainable from "./components/Sustainable";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";

export default function MainComp() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  
  var logg
  var loggT

  if(localStorage.getItem("access_token") && localStorage.getItem("LoggedIn")){
    logg = "/logout"
    loggT = "Logout"
  } else {
    logg = "/login"
    loggT = "Login"
  }
  
  

    return (
      <div className = "Allhere">
      <header className="Header">
      <img src={require("./logo.svg")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >

      <nav className="Nav">
      
              <a href="/">Main</a>
              <a href="/sustainable">Sustainable Traveling</a>
              <a href="/about">About</a>

              <a href={logg}>{loggT}</a>

      </nav>

      </CSSTransition>
      <img src = {require("./animated-globe.gif")} onClick = {toggleNav} className = "Burger" width = {60} height = {60} alt = "nothing"/>
      </header>

                          <div>
                          <Router>
                              {/*
                                A <Switch> looks through all its children <Route>
                                elements and renders the first one whose path
                                matches the current URL. Use a <Switch> any time
                                you have multiple routes, but you want only one
                                of them to render at a time
                              */}
                              <Switch>
                                <Route exact path="/">
                                  <App />
                                </Route>
                                <Route path="/about">
                                  <About />
                                </Route>
                                <Route path="/sustainable">
                                  <Sustainable />
                                </Route>
                                <Route path="/login">
                                  <Login />
                                </Route>
                                
                                <Route path="/logout">
                                  <Logout />
                                </Route>
                              </Switch>
                            
                          </Router>
                          
                          </div>
      </div>
    )
  }
  
  // You can think of these components as "pages"
  // in your app.