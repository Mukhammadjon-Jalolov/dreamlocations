import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        about: "Signup here to create free account"
    }
}

render(){
    return (
                <div className = "About">
                <div className = "Inside">
                    {this.state.about}<br/>
                    <input type = "text" value = "" name = "name"/><br/>
                    <input type = "password" value = ""/>
                </div>
                </div>
            )
        }
}

export default Login;