import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';
import {login} from '../utils/JWTAuth.js';
import Register from './Register';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { withTranslation } from 'react-i18next';

class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        logreg: true,
        username: '',
        password: '',
		passerr: '',
		logerr: ''
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.login = this.login.bind(this);
    this.toggleEnter = this.toggleEnter.bind(this);
}

username = (e) => {
    this.setState({username : e.target.value})
	this.setState({logerr : ""})
}

password = (e) => {
    this.setState({password: e.target.value})
	this.setState({passerr: ""})
}

login(){
    const url = 'http://dreamlocation.uz/api/login.php'
	const { t, i18n } = this.props;
    if(this.state.username && this.state.password){
        axios.post(url, qs.stringify({username: this.state.username, password: this.state.password}))
        .then((response) => {
            //console.log(response)
            if(response.data.jwt && response.data.expireAt){
                let jwt = response.data.jwt;
                let expire_at = response.data.expireAt;
                let loggeduser = response.data.user;
                localStorage.setItem("access_token", jwt);
                localStorage.setItem("expire_at", expire_at);
                localStorage.setItem("LoggedIn", true);
                localStorage.setItem("user", loggeduser);
                window.location.replace("http://dreamlocation.uz/");
            } else if (response.data == "login failed"){
				NotificationManager.error(t("description.incorrect"), t("description.incorrect2"));
				this.setState({logerr: "error"})
				this.setState({passerr: "error"})
			}
        })
    } else {
		NotificationManager.error(t('description.pleasefill'));
		if (!this.state.username) {
			this.setState({logerr: "error"})
		}
		if (!this.state.password) {
			this.setState({passerr: "error"})
		}
	}
}

logout(){
    const url = 'http://dreamlocation.uz/api/logout.php'

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
    const { t, i18n } = this.props;
    let registerComp = <Register toggLogin = {this.toggleEnter}/>
    let loginComp = (
                <div className = "Inside">
                    {t('description.morefunctions')}
                    <br/><br/>
                    <TextField
						error={this.state.logerr}
						id="outlined-basic" 
						label={t('description.username')} 
						variant="outlined"
						onChange = {this.username.bind()}
                    />
                    <br/><br/>
                    <TextField
						error={this.state.passerr}
                        id="outlined-password-input"
                        label={t('description.pass')}
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange = {this.password.bind()}
                        />
                    <br/><br/>
					
                    <Button variant="contained" onClick = {this.login} > {t('description.login')} </Button> <br/><br/>
                   <a href = "#" onClick = {this.toggleEnter} > {t('description.register')} </a> {t('description.ifnotregistered')}
				   <NotificationContainer/>
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

export default withTranslation()(Login);