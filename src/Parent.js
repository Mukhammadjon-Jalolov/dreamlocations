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
import { withTranslation } from 'react-i18next';

import App from './App'
import Sustainable from "./components/Sustainable";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Favorites from "./components/Favorites";

function MainComp({ t, i18n }) {
  
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [Logged, LoggedOrNot] = useState(false);
  const [isAdmin, CheckAdmin] = useState(false);
  const [LogOrNot, SetLogin] = useState(t('description.login'));
  const [LogRoute, SetLogRoute] = useState("/login");


  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
	
	testLogin();
	
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
	
	const testLogin = () => {
		console.log(Logged);
		if(localStorage.getItem("access_token") && localStorage.getItem("LoggedIn")){
			SetLogin(t('description.logout'));
			SetLogRoute("/logout");
			LoggedOrNot(true);
			CheckAdmin("");
		} else {
		SetLogin(t('description.login'));
			SetLogRoute("/login");
		}
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
				<a href="/">
					{t('description.main')}
				</a>
				
				{Logged && <a href="/favorites">{t('description.favorites')} </a>}

				<a href="/sustainable">
				{t('description.sustainable')}
				</a>
				
				<a href="/about">
				{t('description.about')}
				</a>
				
				<a href={LogRoute}>
					{LogOrNot}
				</a>

      </nav>

      </CSSTransition>
      <img src = {require("./animated-globe.gif")} onClick = {toggleNav} className = "Burger" width = {60} height = {60} alt = "nothing"/>
      </header>

                          <div>
                          <Router>
                              {/*
							  
							  {Logged && isAdmin && <a href="/statistics">{t('description.stats')}</a>}
							  
							  
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
								<Route path="/favorites">
                                  <Favorites />
                                </Route>
                                <Route path="/about">
                                  <About />
                                </Route>
                                <Route path="/sustainable">
                                  <Sustainable />
                                </Route>
								
								<Route path="/statistics">
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
  
  export default withTranslation()(MainComp);