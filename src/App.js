import React, {Component, Suspense } from 'react';
import axios from 'axios';
import './Appp.scss';
import Continents from './components/Continents';
import ComposePlace from './components/Compose';
import ListView from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';
import Gallery from './components/ImgGallery';
import CarouselGallery from './components/CarouselGallery';
import Spinnercha from './components/Spinnercha';
import ScrollUpButton from "react-scroll-up-button";

import Button from '@material-ui/core/Button';
import qs from 'qs';
import {login} from './utils/JWTAuth.js';
import { withTranslation } from 'react-i18next';

import { render } from 'react-dom';

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import ImageGallery from 'react-image-gallery';


class Application extends Component {

constructor(props){
    super(props);
    this.state = {
		rasmlar: [],
		stype: false,
		destination: false,
		results: [],
		source: 'data:image/jpeg; base64, ',
		continentstosend: [],
		landscapestosend: [],
		filteredplaces: {continent: {}, landscape: {}},
		value:null,
		receiving: false,
		notfound: false,
		landscapesarrayst: [{landname: 'description.sea', landtype: "sea", val: false}, {landname: 'description.history', landtype: "history", val: false}, {landname: 'description.mountains', landtype: "mountains", val: false}, {landname: 'description.river', landtype: "river", val: false}, {landname: 'description.beach', landtype: "beach", val: false}, {landname: 'description.skyscrapers', landtype: "skyscrapers", val: false}, {landname: 'description.desert', landtype: "desert", val: false}]
    };

    this.searchType = this.searchType.bind(this);
    this.composeDestination = this.composeDestination.bind(this);
    this.sendcontinent = this.sendcontinent.bind(this);
    this.sendlandscape = this.sendlandscape.bind(this);

    this.sendback = this.sendback.bind(this);
    this.toserver = this.toserver.bind(this);
	
}

componentDidMount(){
	const url = 'http://localhost/test.php'
	
	var nocontinents = JSON.parse(localStorage.getItem("continentarraystorage"))
	var nolandscapes = JSON.parse(localStorage.getItem("landscapesarraystorage"))
	
	let token = localStorage.getItem("access_token")
    var currentuser = localStorage.getItem("user")
	if (nocontinents && nolandscapes) {
		this.setState({receiving: true})
		axios.post(url, qs.stringify({continent: nocontinents, landscape: nolandscapes, user: currentuser}), {headers: {"Authorization" : token}})
		.then(response => response.data)
		.then((data) => {
		this.filterer(data)	// We need to filter texts and images separately from received data
		this.setState({receiving: false})
		})
	}

	const rasmarray = this.importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
	this.setState({rasmlar: rasmarray})
	//console.log(rasmarray)
}

importAll(r) {
	let rasmlar = {};
	let rasmarray = [];
		r.keys().forEach((item, index) => {
			var rasm = {}
			//rasmlar[item.replace('./', '')] = r(item);
			rasm.original = item
			rasm.thumbnail = item
			rasmarray.push(rasm)
			//rasmlar = r(item)
		});
	return rasmarray
}


changeContentLang(lang){
	let statecopy = JSON.parse(JSON.stringify(this.state.results))
	for (var i = 0; i < statecopy.length; i++){
		var temptextarr = statecopy[i].description.split("+")
		var translatedescription = {gb: temptextarr[0], de: temptextarr[1], fr: temptextarr[2], uz: temptextarr[3]}
		statecopy[i].description = translatedescription.lang
	}
	this.setState({results: statecopy})
}

handleChange (event, newValue) {
    this.setValue(newValue);
}

handleChangeIndex (index){
    this.setValue(index)
}

// This part filters and separates texts from images. 
filterer(data){
    if(data){
		this.setState({receiving: false})
        var res = data.split("separatorplace")
        var texts = JSON.parse(res[0])
        var resultsimg = JSON.parse(res[1])
        
		if(JSON.parse(res[0]).length){
			this.setState({notfound: false})
		} else {this.setState({notfound: true})}

for (var i = 0; i < texts.length; i++){
	var til = localStorage.getItem("deflang")
	var temptextarr = texts[i].description.split("+")
	var tempcountrr = texts[i].country.split("+")
	var tempnamearr = texts[i].name.split("+")
	var translatecountry = {gb: tempcountrr[0], de: tempcountrr[1], fr: tempcountrr[2], uz: tempcountrr[3]}
	var translatedescription = {gb: temptextarr[0], de: temptextarr[1], fr: temptextarr[2], uz: temptextarr[3]}
	var translatename = {gb: tempnamearr[0], de: tempnamearr[1], fr: tempnamearr[2], uz: tempnamearr[3]}
	texts[i].description = translatedescription
	texts[i].country = translatecountry
	texts[i].name = translatename
}

for (var i = 0; i < resultsimg.length; i++){
    var temptemparr = []
    var temptemp = {}
    for (var j = 0; j < resultsimg[i].pictures.length; j++){
        temptemp = {src: this.state.source + resultsimg[i].pictures[j].img, thumbnail: this.state.source + resultsimg[i].pictures[j].img, thumbnailWidth: 320, thumbnailHeight: 174}
        temptemparr.push(temptemp)
    }
    texts[i].images = temptemparr
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //texts[i].images = resultsimg[i].pictures    // pictures here is an array of images of one places
}
        this.setState({results:texts})
		
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
		
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
    } else if(!data){
        this.setState({results:[]})		// If no data arrives, then it clears the results state and the screen gets empty
    }
}

searchType(){
    this.setState({stype: !this.state.stype})
	
}

composeDestination(){
    this.setState({destination: !this.state.destination})
	
}

sendcontinent(versatile){
    this.setState({continentstosend: versatile, }, () => {this.sendback()})
	//console.log(versatile)
}

sendlandscape(versatile){
    this.setState({landscapestosend: versatile, }, () => {this.sendback()})
}

// This part sends requests to the server with chosen continents or landscape types. The asked places are then received
sendback(){
    const url = 'http://localhost/test.php'
    let token = localStorage.getItem("access_token")
    var currentuser = localStorage.getItem("user")
	this.setState({receiving: true})
	this.setState({notfound: false})
	var nocontinents = JSON.parse(localStorage.getItem("continentarraystorage"))
	var nolandscapes = JSON.parse(localStorage.getItem("landscapesarraystorage"))
	
    axios.post(url, qs.stringify({continent: localStorage.getItem("continentarraystorage") ? nocontinents : this.state.continentstosend, landscape: localStorage.getItem("landscapesarraystorage") ? nolandscapes : this.state.landscapestosend, user: currentuser}), {headers: {"Authorization" : token}})
            .then(response => response.data)
            .then((data) => {
            this.filterer(data)	// We need to filter texts and images separately from received data
			this.setState({receiving: false})
            })
}

// This part sends like and notlike requests to the server
toserver(data, notlike) {
    const url = 'http://localhost/api/liked.php'
    if(localStorage.getItem("access_token")){
        var token = localStorage.getItem("access_token")
        var currentuser = localStorage.getItem("user")
    }
    
    axios.post(url, qs.stringify({liked: data, user: currentuser, dislike: notlike}), {headers: {"Authorization" : token}})
    .then((response) => {
        // This part defines if the received place is liked or not. If it's a liked place, the heart icon becomes active
        if (response.data == "ok") {
            let copystate = JSON.parse(JSON.stringify(this.state.results))
            copystate.forEach(item => {
                if (item.name == data){
                    item.yoqtir = true
                }
            });
            this.setState({results: copystate})
        } else if (response.data == "notok") {
            let copystate = JSON.parse(JSON.stringify(this.state.results))
            copystate.forEach(item => {
                if (item.name == data){
                    item.yoqtir = false
                }
            });
            this.setState({results: copystate})	// The received updated places are then stored in a state called results
        }
    })
}

/*
async login(){
    let info = {
        username: "usr",
        password: "pwd"
    };
    await login(info)
}*/

createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

render(){
	
    let continentcontainer;
    let destination;

    let quantity = this.state.results.length;
    let places;

    if (this.state.results.length > 1){
        places = " destinations"
    } else if (places = 1) {
        places = " destination"
    }

    if(this.state.stype){
        continentcontainer = <Continents sendcontinent = {this.sendcontinent} />;
    } else if(!this.state.stype){
        continentcontainer = null;
    }
	
    if(this.state.destination){
        destination = <ComposePlace sendlandscape = {this.sendlandscape} landscapesarray = {this.state.landscapesarrayst} />;
    } else if(!this.state.destination){
        destination = null;
    }
	
	
	const { t, i18n } = this.props;
	
    return (
            <div className = "App">

					<div className = "Content">
					<Button variant="contained" color="primary" onClick = {this.searchType} >
						{t('description.continents')}
					</Button> &nbsp;
					<Button variant="contained" color="primary" onClick = {this.composeDestination} >
						{t('description.lands')}
					</Button>
					
					
					
					<hr/>
								<div className = "backgroundClass">
									{continentcontainer}
									{destination}
									
									<div className = "smallCard">
										<h3 style = {{color: "black"}}> {quantity > 0 ? quantity + t('description.found') : "" } </h3>
										<h3 style = {{color: "red"}}> {this.state.notfound ? t("description.notfound") : ""} </h3>
									</div>
									
									{this.state.receiving ? <h2> {t('description.searching')} <Spinnercha /> </h2> : ""}
									
									<ListView results = {this.state.results} feedbacktoApp = {this.toserver} />
									
									{(this.state.stype || this.state.destination || this.state.results.length > 0) ? "" : <CarouselGallery/> }
									
									<NotificationContainer/>
									
									<ScrollUpButton />
								</div>
			
					</div>
							
            </div>
            )
        }
}

const MainComponent = withTranslation()(Application)
//export default App;

export default function App(){
	return (
		<Suspense fallback="loading">
			<MainComponent />
		</Suspense>
	)
}

