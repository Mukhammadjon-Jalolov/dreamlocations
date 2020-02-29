import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import santiago from './santiago.jpg';
import './App.css';
import Continents from './components/Continents';
import ComposePlace from './components/Compose';
import ListView from './components/List';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageComp from './components/Imagecomponent';
import { URLSearchParams } from 'url';
import qs from 'qs';


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
    forbutton: 'true'
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

filterer(data){
    if(data){
        var res = data.split("separatorplace")
        var texts = JSON.parse(res[0])
        var resultsimg = JSON.parse(res[1])
        //this.setState({results:texts})

        let tempresults = JSON.parse(JSON.stringify(this.state.results))
        for (var i = 0; i < resultsimg.length; i++){
            //tempresults[i].images = null
            //tempresults[i].images = resultsimg[i].pictures
            texts[i].images = resultsimg[i].pictures
        }
        this.setState({results:texts})
        console.log(this.state.results)
        //console.log(this.state.results[0].images)
        //console.log(typeof this.state.results[0].images)
    } else if(!data){
        this.setState({results:[]})
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
}

sendlandscape(versatile){
    this.setState({landscapestosend: versatile, }, () => {this.sendback()})
}


sendback(){
    const url = 'http://localhost/test.php'

    axios.post(url, qs.stringify({continent: this.state.continentstosend, landscape: this.state.landscapestosend}))
            .then(response => response.data)
            .then((data) => {
            console.log(data)
            this.filterer(data)
            })
    console.log(this.state.continentstosend)
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

            <header>
                <img src={logo} className="App-logo" alt="logo" />

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
                
            </header>
            
                

            </div>

            )
        }
}

export default App;