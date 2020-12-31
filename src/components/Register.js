import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';

class Register extends Component {

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
    this.passwordtwo = this.passwordtwo.bind(this);
    this.toregister = this.toregister.bind(this);
    this.toggleComp = this.toggleComp.bind(this);
}

username = (e) => {
    console.log(e.target.value)
    this.setState({username : e.target.value})
}

password = (e) => {
    console.log(e.target.value )
    this.setState({password: e.target.value})
}

passwordtwo = (e) => {
    console.log(e.target.value )
    this.setState({passwordverif: e.target.value})
}

toregister = () => {
    const url = 'http://192.168.1.193/api/register.php'
    axios.post(url, qs.stringify({username: this.state.username, password: this.state.password}))
    .then((response) => {
        if(response.data == "ok"){
            window.location.replace("http://192.168.1.193:3000/login")
            console.log(response)
        } else {
            console.log(response)
            console.log("Not approved")
        }
    })
}

toggleComp(){
    this.props.toggLogin()
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
                        onChange = {this.passwordtwo.bind()}
                        /><br/><br/>
                    
                    <Button variant="contained" onClick = {this.toregister} >Register</Button> <br/><br/> or <a href = '#' onClick = {this.toggleComp} >Login</a> if you have an account <br/>

                </div>
            )
        }
}

export default Register;