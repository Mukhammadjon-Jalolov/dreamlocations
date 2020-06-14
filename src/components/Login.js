import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends Component {

constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        about: "Login here"
    }
    this.username = this.username.bind(this);
}

username = (e) => {
    console.log(e.target.value)
}

password = (e) => {
    console.log(e.target.value )
}

render(){
    return (
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
                    <Button variant="contained">Login</Button> <br/>
                </div>
            )
        }
}

export default Login;