import React, {Component} from 'react';
import '../App.css';
import Gallery from 'react-grid-gallery';
import Liked from './Liked';
import axios from 'axios';
import qs from 'qs';
import ListView from './List';

class Favorites extends Component {

constructor(props){
    super(props);
	this.state = {
		results: [],
		source: 'data:image/jpeg; base64, '
	}
	this.askfavorites = this.askfavorites.bind(this);
	this.filterer = this.filterer.bind(this);
	this.toserver = this.toserver.bind(this);
	this.removeFavorite = this.removeFavorite.bind(this);
}

componentDidMount(){
    //console.log("Component Did Mount")
	this.askfavorites();
}

askfavorites(){
	//console.log("Hello from Favorites");
    const url = 'http://localhost/api/favorites.php';
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
        var res = data.split("separatorplace")
        var texts = JSON.parse(res[0])
        var resultsimg = JSON.parse(res[1])
        //this.setState({results:texts})

        //let tempresults = JSON.parse(JSON.stringify(this.state.results))
for (var i = 0; i < resultsimg.length; i++){
    var temptemparr = []
    var temptemp = {}
    for (var j = 0; j < resultsimg[i].pictures.length; j++){
        temptemp = {src: this.state.source + resultsimg[i].pictures[j].img, thumbnail: this.state.source + resultsimg[i].pictures[j].img, thumbnailWidth: 320, thumbnailHeight: 174}
        temptemparr.push(temptemp)
    }
    texts[i].images = temptemparr
    //texts[i].images = resultsimg[i].pictures    // pictures here is an array of images of one places
}
        this.setState({results:texts})
        console.log(this.state.results)
        //console.log(this.state.results[0].images)
        //console.log(typeof this.state.results[0].images)
    } else if(!data){
        this.setState({results:[]})
    }
}


toserver(data, notlike) {
    const url = 'http://localhost/api/liked.php'
    //console.log("So you liked " + info)
    if(localStorage.getItem("access_token")){
        var token = localStorage.getItem("access_token")
        var currentuser = localStorage.getItem("user")
    }
    
    axios.post(url, qs.stringify({liked: data, user: currentuser, dislike: notlike}), {headers: {"Authorization" : token}})
    .then((response) => {
        console.log(response.data)
        
        if (response.data == "ok") {
            let copystate = JSON.parse(JSON.stringify(this.state.results))
            //console.log("Received Approval!")
            copystate.forEach(element => {
                if (element.name == data){
                    element.yoqtir = true
                }
            });
            this.setState({results: copystate})
        } else if (response.data == "notok") {
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
        }
    })
}

removeFavorite(){
	
}

render(){
	
	let quantity = this.state.results.length;
	
        return(
				<div className = "App">
					<div className = "Content">
					
					<br/><br/>
					
					{"Here is your " + quantity + " favorite destinations"}
					{"Sizning " + quantity + " yoqtirgan joylaringiz"}
					
					<ListView results = {this.state.results} feedbacktoApp = {this.toserver}/>
					
					</div>
				</div>
			)
        }
}

export default Favorites;