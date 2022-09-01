import React, {Component} from 'react';
import '../App.css';
import Gallery from 'react-grid-gallery';
import Liked from './Liked';
import axios from 'axios';
import qs from 'qs';
import ListView from './List';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { withTranslation } from 'react-i18next';
import Spinnercha from './Spinnerchasmall';

class Favorites extends Component {

constructor(props){
    super(props);
	this.state = {
		results: [],
		anyfavs: false,
		source: 'data:image/jpeg; base64, '
	}
	this.askfavorites = this.askfavorites.bind(this);
	this.filterer = this.filterer.bind(this);
	this.toserver = this.toserver.bind(this);
	this.removeFavorite = this.removeFavorite.bind(this);
}

componentDidMount(){
	this.askfavorites();
	this.setState({anyfavs: true})
}

askfavorites(){
    const url = 'http://dreamlocation.uz/api/favorites.php';
    let token = localStorage.getItem("access_token")
    var currentuser = localStorage.getItem("user")
    axios.post(url, qs.stringify({user: currentuser, test: "test"}), {headers: {"Authorization" : token}})
            .then(response => response.data)
			.then((data) => {
            //console.log(data)     // IS LEFT FOR TESTING PURPOSES
            this.filterer(data)
            })
    //console.log(this.state.continentstosend) // IS LEFT FOR TESTING PURPOSES 
}

filterer(data){
    if(data){
		this.setState({anyfavs: false})
        var res = data.split("separatorplace")
        var texts = JSON.parse(res[0])
        var resultsimg = JSON.parse(res[1])
        
		if(JSON.parse(res[0]).length){
			this.setState({notfound: false})
			console.log(JSON.parse(res[0]).length)
		} else {this.setState({notfound: true})}

for (var i = 0; i < texts.length; i++){
	var til = localStorage.getItem("deflang")
	var temptextarr = texts[i].description.split("+")
	var tempcountrr = texts[i].country.split("+")
	var translatecountry = {gb: tempcountrr[0], de: tempcountrr[1], fr: tempcountrr[2], uz: tempcountrr[3]}
	var translatedescription = {gb: temptextarr[0], de: temptextarr[1], fr: temptextarr[2], uz: temptextarr[3]}
	texts[i].description = translatedescription
	texts[i].country = translatecountry
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
}
        this.setState({results:texts})
		
		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
    } else if(!data){
        this.setState({results:[]})		// If no data arrives, then it clears the results state and the screen gets empty
    }
}


toserver(data, notlike) {
	const { t, i18n } = this.props;
    const url = 'http://dreamlocation.uz/api/liked.php'
    //console.log("So you liked " + info)
    if(localStorage.getItem("access_token")){
        var token = localStorage.getItem("access_token")
        var currentuser = localStorage.getItem("user")
    }
    
    axios.post(url, qs.stringify({liked: data, user: currentuser, dislike: notlike}), {headers: {"Authorization" : token}})
    .then((response) => {
		console.log(response)
        if (response.data == "notok") {
			var i
            let copystate = JSON.parse(JSON.stringify(this.state.results))
            copystate.forEach(element => {
                if (element.name == data){
					i = copystate.indexOf(element)
                    element.yoqtir = false
                }
            });
			copystate.splice(i, 1)
            this.setState({results: copystate})
			NotificationManager.info(t('description.removefav'), data);
        }
		
    })
}

removeFavorite(){
	
}

render(){
	const { t, i18n } = this.props;
	let quantity = this.state.results.length;
	
        return(
				<div className = "App">
					<div className = "Content">
					
					<br/>
					<div className = "smallCard">
						{<h3 style = {{color: "blue"}}> {t('description.favoritesnumber')} {quantity} {t('description.favoritesnumber2')}</h3>}
					</div>
					
					{this.state.anyfavs ? <Spinnercha /> : ""}
					
					<ListView results = {this.state.results} feedbacktoApp = {this.toserver}/>
					<NotificationContainer/>
					</div>
				</div>
			)
        }
}

export default withTranslation()(Favorites);