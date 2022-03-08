import React, {Component, Suspense } from 'react';
import View from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState, useEffect } from "react";
import "./components/Header.css";
import { CSSTransition } from "react-transition-group";
import './Appp.scss';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import App from './App'
import Sustainable from "./components/Sustainable";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Favorites from "./components/Favorites";
const { forwardRef, useRef, useImperativeHandle } = React;


const languages = [
  { code: 'gb', name: 'English'},
  { code: 'fr', name: 'French'},
  { code: 'de', name: 'Deutsch'},
  { code: 'uz', name: 'Uzbek'}
]

class LanguageSwitcherSelector extends Component {
  onChange = e =>{
    this.props.handleChangeLanguage(e.target.className);
  }
  
  render() {
    const options = languages.map(language => {
      if(language.code != this.props.lang){
        return <li onClick={this.onChange}><div value={language.code} className={language.code} ></div></li>
      }
    });
    return (
      <div className="lang">
        <div className={this.props.lang} > </div>
        <ul class="dropdown" >
          {options}
        </ul>
      </div>
    )
  }
}




// --------------------------------------------------------------------------------------------------------------------
function MainComp() {
  const { t, i18n } = useTranslation();
  
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [Logged, LoggedOrNot] = useState(false);
  const [isAdmin, CheckAdmin] = useState(false);
  const [LogOrNot, SetLogin] = useState('login');
  const [LogRoute, SetLogRoute] = useState("/login");
  const [language, changeLanguageHandler] = useState(localStorage.getItem("deflang") || "gb");
  
  useEffect(() => {
	  if (!localStorage.getItem("deflang")) {
		  i18n.changeLanguage("gb")
	  } else {console.log("language set")}
  }, [language])
  
  const changeLanguage = (lang) => {
    changeLanguageHandler(lang);
	localStorage.setItem("deflang", lang);
	i18n.changeLanguage(lang);
	
}

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
		if(localStorage.getItem("access_token") && localStorage.getItem("LoggedIn")){
			SetLogin('logout');
			SetLogRoute("/logout");
			LoggedOrNot(true);
			CheckAdmin("");
		} else {
		SetLogin('login');
			SetLogRoute("/login");
		}
	}

    return (
	
      <div className = "Allhere">
      <header className="Header">
	  
      <img src={require("./logo.svg")} className = "Logo" alt="logo" />
	  
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
		
		
		
      <nav className="Nav">
				
				<div className = "Translat">
					<LanguageSwitcherSelector lang={language} handleChangeLanguage={changeLanguage}/>
				</div>
				
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
					{t('description.'+LogOrNot)}
				</a>
				

      </nav>

      </CSSTransition>
      <img src = {require("./animated-globe.gif")} onClick = {toggleNav} className = "Burger" width = {60} height = {60} alt = "nothing"/>
	  
      </header>
				
			  
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
					  <App state = {language} />
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
			<div className = "footer">
				Hello
			</div>
				
      </div>
    )
  }
  
  export default withTranslation()(MainComp);