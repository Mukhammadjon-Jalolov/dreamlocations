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


class App extends Component {

constructor(props){
    super(props);
    this.state = {stype: false,
    destination: false,
    javob: "empty",
    results: [],
    results2: [],
    source: 'data:image/jpeg; base64, '
    };

    this.searchType = this.searchType.bind(this);
    this.composeDestination = this.composeDestination.bind(this);
    this.testBackend = this.testBackend.bind(this);
    this.sendback = this.sendback.bind(this);
}

componentDidMount(){
    const url = 'http://localhost/test.php'

    axios.get(url, {crossDomain: true}).then(response => response.data)
    .then((data) => {
        this.setState({results: data})
        console.log(typeof data)
        console.log(data)
        this.filterer(data)
    })
    /*
    axios.get(url, {crossDomain: true}).then(response => response.data) //responseType: 'stream'
    .then(data => { // response
        var img = 'data:image/jpeg; base64, ' + data
        this.setState({source: img}); //source: response.data
        console.log(typeof data)  //response.data
    }); */

}

filterer(data){
    if (data[0].pictures){
        window.alert("We received images data!")
    } else {
        this.setState({results:data})
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

sendback(data){
    console.log(data + " Came from component")
    window.alert("Message from the Component: " + data)
}

testBackend(){
    const url = 'http://localhost/test.php'
    axios.get(url, {crossDomain: true}).then(response => response.data)
    .then((data) => {
        this.setState({javob: "nothing again"})
        //console.log(this.state.results)
    })
}
render(){
    let element;
    let destination;
    if(this.state.stype){
        element = <Continents sendback = {this.sendback}/>;
    }
    if(this.state.destination){
        destination = <ComposePlace />;
    }


    return (
            <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />

                <Button variant="outlined" color="primary" onClick = {this.searchType}>
                  Find by Continents
                </Button>
                <Button variant="outlined" color="primary" onClick = {this.composeDestination}>
                  Find your dream destination
                </Button>
                <Button variant="outlined" color="primary" onClick = {this.testBackend}>
                  Connect to world!
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