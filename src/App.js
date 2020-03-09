import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Continents from './components/Continents';
import ComposePlace from './components/Compose';
import ListView from './components/List';
import About from './components/About';
import Nav from './components/Nav';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageComp from './components/Imagecomponent';
import { URLSearchParams } from 'url';
import qs from 'qs';


import image from './santiago.jpg';
import image2 from './sany.jpg';
import image3 from './sauckland.jpg';


import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";



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

    this.sendback = this.sendback.bind(this);

}



componentDidMount(){
    const url = 'http://localhost/test.php'

    axios.get(url, {crossDomain: true}).then(response => response.data)
    .then((data) => {
        //console.log(data)
        //this.filterer(data)
    })
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

        let tempresults = JSON.parse(JSON.stringify(this.state.results))
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

    axios.post(url, qs.stringify({continent: this.state.continentstosend, landscape: this.state.landscapestosend}))
            .then(response => response.data)
            .then((data) => {
            //console.log(data)     // IS LEFT FOR TESTING PURPOSES
            this.filterer(data)
            })
    //console.log(this.state.continentstosend) // IS LEFT FOR TESTING PURPOSES 
}

render(){


    let element;
    let destination;
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


    return (
            <div className="App">
            <Header />
            
                <div className = 'Content'>

                <Button variant="outlined" color="primary" onClick = {this.searchType}>
                  Find by Continents
                </Button>
                <Button variant="outlined" color="primary" onClick = {this.composeDestination}>
                  Find by lanscape type
                </Button>
                
                <br/><br/>
                {element}
                {destination}<br/>
                There should be data from the backend:
                <ListView results = {this.state.results} />
                
                </div>

            </div>

            )
        }
}

export default App;