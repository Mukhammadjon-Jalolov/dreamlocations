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
    continentsarray: [{continent: 'Europe', val: false}, {continent: 'North America', val: false}, {continent: 'South America', val: false}, {continent: 'Asia', val: false}, {continent: 'Australia', val: false}],
    landscapesarray: ['sea', 'history', 'mountains', 'river', 'beach'],
    forbutton: 'true'
    };

    this.searchType = this.searchType.bind(this);
    this.composeDestination = this.composeDestination.bind(this);
    this.sendback = this.sendback.bind(this);
    this.newButton = this.newButton.bind(this);
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
    this.setState({stype: true});
    this.setState({destination: false});
}
composeDestination(){
    this.setState({destination: true});
    this.setState({stype: false});
}

sendback(versatile){
    const url = 'http://localhost/test.php'
    
    axios.post(url, qs.stringify(versatile))
            .then(response => response.data)
            .then((data) => {
            console.log(data)
            this.filterer(data)
            })
}

newButton(data){
    const url = 'http://localhost/test.php'
    var versatile;
    
    for (var i=0; i < this.state.continentsarray.length; i++){
        if (data == this.state.continentsarray[i].continent){
            var tempobj = JSON.parse(JSON.stringify(this.state.continentsarray))
            tempobj[i].val = !tempobj[i].val
            
            this.setState({continentsarray: tempobj})
            //versatile.continent = tempobj[i].continent
            versatile = {'continent': tempobj}
        }
    }
    
    
    axios.post(url, qs.stringify(versatile))
            .then(response => response.data)
            .then((data) => {
            console.log(data)
            this.filterer(data)
            })
}

render(){
    let element;
    let destination;
    if(this.state.stype){
        element = <Continents sendback = {this.sendback} />;
    }
    if(this.state.destination){
        destination = <ComposePlace />;
    }


    return (
            <div className="App">

                

            <header>
                <img src={logo} className="App-logo" alt="logo" />


                {this.state.continentsarray.map((result, index) => (
                    <input type = 'button' className = {result.val?'button':'button2'} value = {result.continent} onClick = {this.newButton.bind(this, result.continent)} />
                ))}



                <Button variant="outlined" color="primary" onClick = {this.searchType}>
                  Find by Continents
                </Button>
                <Button variant="outlined" color="primary" onClick = {this.composeDestination}>
                  Find your dream destination
                </Button>

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