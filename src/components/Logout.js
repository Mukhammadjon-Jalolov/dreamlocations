import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import Spinnercha from './Spinnerchasmall';
import '../Appp.scss';

class Logout extends Component {

constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
}

componentDidMount(){
    this.logout()
}

logout(){
    const url = 'http://dreamlocation.uz/api/logout.php'

    if(localStorage.getItem("access_token")){
        var token = localStorage.getItem("access_token")
        var currentuser = localStorage.getItem("user")
    }

    //axios.post(url, qs.stringify({user: currentuser}), {headers: {"Authorization" : token}})
    axios.post(url, qs.stringify({user: currentuser, Authorization: token}))
    .then((response) => {

        if (response.data == "ok") {
			window.location.replace("http://dreamlocation.uz/");
			
            localStorage.removeItem("access_token")
            localStorage.removeItem("user")
            localStorage.removeItem("LoggedIn")
            localStorage.removeItem("expire_at")
			
			localStorage.removeItem("continentarraystorage")
			localStorage.removeItem("landscapesarraystorage")
            console.log("You have been logged out")
        } else {
            console.log(response.data) // Any different responses are shown here
        }
    })
}

render(){
    return (
			<div className = "App">
                <div className = "Content">
                    <h3> Logging out... </h3>
					<Spinnercha />
                </div>
			</div>
            )
        }
}

export default Logout;