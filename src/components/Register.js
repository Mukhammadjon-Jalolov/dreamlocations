import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        about: "Register here to create free account",
        username: '',
        password: '',
        passwordverif: ''
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.passwordverif = this.passwordverif.bind(this);
}

username = (e) => {
    console.log(e.target.value)
    this.setState({username : e.target.value})
}

password = (e) => {
    console.log(e.target.value )
    this.setState({password: e.target.value})
}

passwordverif = (e) => {
    console.log(e.target.value )
    this.setState({passwordverif: e.target.value})
}

render(){
    return (
                <div className = "Inside">
                    {this.state.about}<br/>
                    <TextField required id="standard-required" label="Username" onChange = {this.username.bind()} /><br/>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.password.bind()}
                        /> <br/>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.passwordverif.bind()}
                        /><br/><br/>
                    
                    <Button variant="contained">Register</Button> <br/><br/> or Login if you have an account <br/>

                </div>
            )
        }
}

export default Login;