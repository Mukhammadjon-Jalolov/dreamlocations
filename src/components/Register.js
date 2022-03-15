import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import qs from 'qs';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { withTranslation } from 'react-i18next';

class Register extends Component {

constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        passwordverif: '',
		emailaddress: '',
		passmismatch: false,
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.passwordtwo = this.passwordtwo.bind(this);
	this.email = this.email.bind(this);
    this.toregister = this.toregister.bind(this);
    this.toggleComp = this.toggleComp.bind(this);
}

username = (e) => {
    this.setState({username : e.target.value})
}

password = (e) => {
    this.setState({password: e.target.value})
	this.setState({passmismatch: false})
}

passwordtwo = (e) => {
    this.setState({passwordverif: e.target.value})
	this.setState({passmismatch: false})
}

email = (e) => {
	console.log(e.target.value)
	this.setState({emailaddress: e.target.value})
}

toregister = () => {
    const url = 'http://localhost/api/register.php'
	const { t, i18n } = this.props;
	var finalpass;
	// Do something with email address. This part will send an account activation link to the email provided
	// https://www.youtube.com/watch?v=7WANMTdxBws
	// https://swiftmailer.symfony.com/docs/introduction.html
		
		if (this.state.password == this.state.passwordverif) {
			
			finalpass = this.state.password
			
			
			axios.post(url, qs.stringify({username: this.state.username, password: finalpass, email: this.state.emailaddress}))
			.then((response) => {
			if(response.data == "ok"){
				NotificationManager.success('You can check you email', 'Confirmation link is sent');
				
				setTimeout(function(){
					window.location.replace("http://localhost:3000/login")
				}, 4000)
				
				
				console.log(response)
			} else if (response.data == "Already Registered"){
				console.log(response)
				NotificationManager.error(t("description.tryothername"), t('description.alreadyreg'));
			}
			})
	} else if (this.state.password !== this.state.passwordverif) {
		this.setState({passmismatch: true})
		console.log(this.state.password)
		console.log(this.state.passwordverif)
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
                    <TextField required id="standard-required" label={t('description.username')} onChange = {this.username.bind()} /><br/>
					<TextField required id="standard-required" label={t('description.email')} onChange = {this.email.bind()} /><br/>
                    <TextField
                        id="standard-password-input"
                        label={t('description.pass')}
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.password.bind()}
                        /> <br/>
                    <TextField
                        id="standard-password-input"
                        label={t('description.pass')}
                        type="password"
                        autoComplete="current-password"
                        onChange = {this.passwordtwo.bind()}
                        /><br/><br/>
                    
					<h4 style = {{color: "red"}}> {this.state.passmismatch ? t('description.mismatch') : ""} </h4>
					
					<Button variant="contained" onClick = {this.toregister} >{t('description.register')}</Button> <br/><br/> {t('description.or')} <a href = '#' onClick = {this.toggleComp} >{t('description.login')}</a> {t('description.ifhasaccount')} <br/>
					<NotificationContainer/>

                </div>
            )
        }
}

export default withTranslation()(Register);