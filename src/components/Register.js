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
		emailaddress: ''
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.passwordtwo = this.passwordtwo.bind(this);
	this.email = this.email.bind(this);
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

email = (e) => {
	console.log(e.target.value)
	this.setState({emailaddress: e.target.value})
}

toregister = () => {
    const url = 'http://localhost/api/register.php'
	
	// Do something with email address. This part will send an account activation link to the email provided
	// https://www.youtube.com/watch?v=7WANMTdxBws
	// https://swiftmailer.symfony.com/docs/introduction.html
	
    axios.post(url, qs.stringify({username: this.state.username, password: this.state.password, email: this.state.emailaddress}))
    .then((response) => {
        if(response.data == "ok"){
            window.location.replace("http://localhost:3000/login")
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
	const { t, i18n } = this.props;
    return (
                <div className = "Inside">
                    {t('description.registerfree')}<br/>
                    <TextField required id="standard-required" label="Username" onChange = {this.username.bind()} /><br/>
					<TextField required id="standard-required" label="Email" onChange = {this.email.bind()} /><br/>
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
                    
					<Button variant="contained" onClick = {this.toregister} >{t('description.register')}</Button> <br/><br/> {t('description.or')} <a href = '#' onClick = {this.toggleComp} >{t('description.login')}</a> {t('description.ifhasaccount')} <br/>

                </div>
            )
        }
}

export default withTranslation()(Register);