import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Continents from './components/Continents';
import ComposePlace from './components/Compose';
import ListView from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import Button from '@material-ui/core/Button';
import qs from 'qs';

import {login} from './utils/JWTAuth.js';


class App extends Component {

constructor(props){
    super(props);
    this.state = {stype: false,
    destination: false,
    results: [],
    source: 'data:image/jpeg; base64, ',
    continentstosend: [],
    landscapestosend: [],
    filteredplaces: {continent: {}, landscape: {}},
    value:null,
    
    };

    this.searchType = this.searchType.bind(this);
    this.composeDestination = this.composeDestination.bind(this);
    this.sendcontinent = this.sendcontinent.bind(this);
    this.sendlandscape = this.sendlandscape.bind(this);
    
    //this.login = this.login.bind(this);

    this.sendback = this.sendback.bind(this);
    this.toserver = this.toserver.bind(this);

}



componentDidMount(){
    const url = 'http://localhost/index.php'

    //axios.get(url, {crossDomain: true}).then(response => response.data)
    //.then((data) => {
        //console.log(data)
        //this.filterer(data)
    //})
    /*    axios.get(url, {crossDomain: true}).then(response => response.data) //responseType: 'stream'
    .then(data => { // response
        var img = 'data:image/jpeg; base64, ' + data
        this.setState({source: img}); //source: response.data
        console.log(typeof data)  //response.data
    }); */
}


handleChange (event, newValue) {
    this.setValue(newValue);
}

handleChangeIndex (index){
    this.setValue(index)
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
/*
var singlepic = []
    this.props.images.forEach(element => {
        var tempimg = {src: this.state.source + element.img, thumbnail: this.state.source + element.img, thumbnailWidth: 320,
            thumbnailHeight: 174}
        singlepic.push(tempimg)
    })
    this.createAlbum(singlepic)*/

searchType(){
    this.setState({stype: !this.state.stype})
}

composeDestination(){
    this.setState({destination: !this.state.destination})
}

sendcontinent(versatile){
    this.setState({continentstosend: versatile, }, () => {this.sendback()})
}

sendlandscape(versatile){
    this.setState({landscapestosend: versatile, }, () => {this.sendback()})
}


sendback(){
    const url = 'http://localhost/test.php'
    let token = localStorage.getItem("access_token")
    var currentuser = localStorage.getItem("user")
    axios.post(url, qs.stringify({continent: this.state.continentstosend, landscape: this.state.landscapestosend, user: currentuser}), {headers: {"Authorization" : token}})
            .then(response => response.data)
            .then((data) => {
            //console.log(data)     // IS LEFT FOR TESTING PURPOSES
            this.filterer(data)
            })
    //console.log(this.state.continentstosend) // IS LEFT FOR TESTING PURPOSES 
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

render(){


    let element;
    let destination;

    let quantity = this.state.results.length;
    let places;

    if (this.state.results.length > 1){
        places = " destinations"
    } else if (places = 1) {
        places = " destination"
    }

    if(this.state.stype){
        element = <Continents sendcontinent = {this.sendcontinent} />;
    } else if(!this.state.stype){
        element = null;
    }
    if(this.state.destination){
        destination = <ComposePlace sendlandscape = {this.sendlandscape}/>;
    } else if(!this.state.destination){
        destination = null;
    }

                    // This was below className = "App" <Header />
    return (
            <div className = "App">
            
            
                <div className = "Content">

                <Button variant="outlined" color="primary" onClick = {this.login}>
                  LoginTest
                </Button>
                
                <Button variant="outlined" color="primary" onClick = {this.searchType}>
                  Find by Continents
                </Button>
                <Button variant="outlined" color="primary" onClick = {this.composeDestination}>
                  Find by lanscape type
                </Button>
                
                <br/><br/>
                {element}
                {destination}
                {quantity > 0 ? 'We have found ' + quantity + places : "We haven`t found matching results"}
                
                <Login /> <br/>
                <Register /> <br/>
                <ListView results = {this.state.results} feedbacktoApp = {this.toserver}/>
                    
                </div>

            </div>

            )
        }
}

export default App;