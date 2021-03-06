import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';
import {login} from '../utils/JWTAuth.js';
import Register from './Register';

class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        logreg: true,
        username: '',
        password: '',
        about: "Login to enable more functionalities"
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.login = this.login.bind(this);
    this.toggleEnter = this.toggleEnter.bind(this);
}

username = (e) => {
    console.log(e.target.value)
    this.setState({username : e.target.value})
}

password = (e) => {
    console.log(e.target.value )
    this.setState({password: e.target.value})
}

login(){
    const url = 'http://192.168.1.193/api/login.php'

    if(this.state.username && this.state.password){
        axios.post(url, qs.stringify({username: this.state.username, password: this.state.password}))
        .then((response) => {
            console.log(response)
            if(response.data.jwt && response.data.expireAt){
                let jwt = response.data.jwt;
                let expire_at = response.data.expireAt;
                let loggeduser = response.data.user;
                localStorage.setItem("access_token", jwt);
                localStorage.setItem("expire_at", expire_at);
                localStorage.setItem("LoggedIn", true);
                localStorage.setItem("user", loggeduser);
                window.location.replace("http://192.168.1.193:3000/");
            }
        })
    }
}

logout(){
    const url = 'http://192.168.1.193/api/logout.php'

    if(localStorage.getItem("access_token")){
        var token = localStorage.getItem("access_token")
        var currentuser = localStorage.getItem("user")
    }

    axios.post(url, qs.stringify({user: currentuser}), {headers: {"Authorization" : token}})
    .then((response) => {
        
        if (response.data == "ok") {
            localStorage.removeItem("access_token")
            localStorage.removeItem("user")
            localStorage.removeItem("LoggedIn")
            localStorage.removeItem("expire_at")
            console.log("You have been logged out")
        }
    })
}

toggleEnter(){
    this.setState({logreg: !this.state.logreg})
}

/*
async login(){
    if(this.state.username && this.state.password){
        let data = {
            username: this.state.username, 
            password: this.state.password
        };
        await login(data)
    }
}
*/
render(){
    
    let registerComp = <Register toggLogin = {this.toggleEnter}/>
    let loginComp = (
                <div className = "Inside">
                    {this.state.about}
                    <br/><br/>
                    <TextField id="outlined-basic" label="Username" variant="outlined"
                    onChange = {this.username.bind()}
                    />
                    <br/><br/>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange = {this.password.bind()}
                        />
                    <br/><br/>
                    <Button variant="contained" onClick = {this.login} >Login</Button> <br/><br/>
                    or <a href = "#" onClick = {this.toggleEnter} >Register</a> if not registered
            </div>
    )

    return (
            <div className = "App">
            <div className = "Content">

            {this.state.logreg ? loginComp : registerComp}
            </div>
            </div>
            
        )
    }
}

export default Login;