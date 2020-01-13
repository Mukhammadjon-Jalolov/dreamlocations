import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Continents from './components/Continents';
import ComposePlace from './components/Compose';
import ListView from './components/List';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class App extends Component {

constructor(props){
    super(props);
    this.state = {stype: false,
    destination: false,
    javob: "empty"};
    this.searchType = this.searchType.bind(this);
    this.composeDestination = this.composeDestination.bind(this);
    this.testBackend = this.testBackend.bind(this);
}

componentDidMount(){
    const url = 'http://localhost/test.php'
    axios.get(url, {crossDomain: true}).then(response => response.data)
    .then((data) => {
        this.setState({javob: data})
    })
}


searchType(){
    this.setState({stype: true});
    this.setState({destination: false});
}
composeDestination(){
    this.setState({destination: true});
    this.setState({stype: false});
}

testBackend(){
    const url = 'http://localhost/test.php'
    axios.get(url, {crossDomain: true}).then(response => response.data)
    .then((data) => {
        this.setState({javob: data})
    })
}
render(){
    let element;
    let destination;
    if(this.state.stype){
        element = <Continents />;
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
                {this.state.javob}
                <ListView />
            </header>
            </div>

            )
        }
}

export default App;