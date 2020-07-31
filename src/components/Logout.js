import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

class Logout extends Component {

constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
}

componentDidMount(){
    this.logout()
}

logout(){
    const url = 'http://localhost/api/logout.php'

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
            window.location.replace("http://localhost:3000/");
        }
    })
}


render(){
    return (
                <div className = "Content">
                    
                </div>
            )
        }
}

export default Logout;