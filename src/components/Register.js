import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { withTranslation } from 'react-i18next';
import Spinnercha from './Spinnerchasmall';

class Register extends Component {

constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        passwordverif: '',
		emailaddress: '',
		passmismatch: false,
		allsent: false
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.passwordtwo = this.passwordtwo.bind(this);
	this.email = this.email.bind(this);
    this.toregister = this.toregister.bind(this);
    this.toggleComp = this.toggleComp.bind(this);
	this.clearspinner = this.clearspinner.bind(this);
}

username = (e) => {
    this.setState({username : e.target.value})
	this.setState({usrerr: ""})
}

password = (e) => {
    this.setState({password: e.target.value})
	this.setState({passmismatch: false})
	this.setState({passerr: ""})
}

passwordtwo = (e) => {
    this.setState({passwordverif: e.target.value})
	this.setState({passmismatch: false})
	this.setState({passerr: ""})
}

email = (e) => {
	this.setState({emailaddress: e.target.value})
	this.setState({emailerr: ""})
}

clearspinner = (e) => {
	this.setState({allsent: false})
}

toregister = () => {
    const url = 'http://localhost/api/register.php'
	const { t, i18n } = this.props;
	var finalpass;
	//NotificationManager.success(t('description.checkemail'), t('description.checkemail2'))
	
	// Do something with email address. This part will send an account activation link to the email provided
	// https://www.youtube.com/watch?v=7WANMTdxBws
	// https://swiftmailer.symfony.com/docs/introduction.html
		
		if (this.state.password == this.state.passwordverif) {
			
				finalpass = this.state.password
				
				if (this.state.password && this.state.emailaddress && this.state.username && this.state.emailaddress.includes("@")) {
					this.setState({allsent: true})
					
					axios.post(url, qs.stringify({username: this.state.username, password: finalpass, email: this.state.emailaddress}))
					.then((response) => {
						//window.alert(t('description.senttoserver'))
						//console.log(response)
						if(response.data == "ok"){
							NotificationManager.success(t('description.checkemail'), t('description.checkemail2'));
							this.setState({allsent: false})
								setTimeout(function(){
									window.location.replace("http://localhost:3000/login")
								}, 4000)
					
						console.log(response)
						} else if (response.data == "Already Registered"){
							console.log(response)
							NotificationManager.error(t("description.tryothername"), t('description.alreadyreg'));
							this.setState({allsent: false})
						} else {
							NotificationManager.error(response.data, t('description.wegotthis'));
							this.setState({allsent: false})
						}
					})
					
				} else {
					if (!this.state.username) {this.setState({usrerr: "error"})}
					if (!this.state.emailaddress) {this.setState({emailerr: "error"})}
					if (!this.state.password) {this.setState({passerr: "error"})}
					NotificationManager.error(t('description.fillall'), t('description.incorrect2'))
					
					if(!this.state.emailaddress.includes("@")) {
						this.setState({emailerr: "error"})
						NotificationManager.error(t('description.validemail'), t('description.incorrect2'))
					}
				}
			
	} else if (this.state.password !== this.state.passwordverif) {
		this.setState({passmismatch: true})
		console.log(this.state.password)
		console.log(this.state.passwordverif)
		this.setState({passerr: "error"})
		
	}
	
}

toggleComp(){
    this.props.toggLogin()
}

render(){
	const { t, i18n } = this.props;
    return (
                <div className = "Inside">
                    {t('description.registerfree')}<br/>
                    <TextField required
						error={this.state.usrerr}
						id="standard-required" 
						label={t('description.username')} 
						onChange = {this.username.bind()} 
						/><br/>
					<TextField required
						error={this.state.emailerr}
						id="standard-required" 
						label={t('description.email')} 
						onChange = {this.email.bind()} 
						/>
						<br/>
                    <TextField
						error={this.state.passerr}
                        id="standard-password-input"
                        label={t('description.pass')}
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.password.bind()}
                        /> <br/>
                    <TextField
						error={this.state.passerr}
                        id="standard-password-input"
                        label={t('description.pass')}
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.passwordtwo.bind()}
                        /><br/><br/>
                    
					<h4 style = {{color: "red"}}> {this.state.passmismatch ? t('description.mismatch') : ""} </h4>
					
					{this.state.allsent ? <Spinnercha /> : ""}
					
					<Button variant="contained" onClick = {this.toregister} >{t('description.register')}</Button> <br/><br/> {t('description.or')} <a href = '#' onClick = {this.toggleComp} >{t('description.login')}</a> {t('description.ifhasaccount')} <br/>
					<NotificationContainer/>

                </div>
            )
        }
}

export default withTranslation()(Register);