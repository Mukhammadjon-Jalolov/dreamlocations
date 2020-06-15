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
        about: "Login to enable more functionalities"
    }
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
}

username = (e) => {
    console.log(e.target.value)
    this.setState({username : e.target.value})
}

password = (e) => {
    console.log(e.target.value )
    this.setState({password: e.target.value})
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
                    <Button variant="contained">Login</Button> <br/><br/>
                    or Register if not registered

                </div>
            )
        }
}

export default Login;