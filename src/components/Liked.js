import React, {Component} from 'react';
import '../App.css';

class Liked extends Component {

constructor(props){
    super(props);
    this.state = {
        Logged: false
    }

    this.sendLike = this.sendLike.bind(this);
    this.unsendLike = this.unsendLike.bind(this);
}

componentDidMount(){
    let loggedmi = localStorage.getItem("LoggedIn")
    this.setState({Logged: loggedmi})
}


sendLike = () => {
    console.log("Like image is " + this.props.place)
    this.setState({Logged: !this.state.Logged})
}

unsendLike = () => {
    console.log("Not Like")
    this.setState({Logged: !this.state.Logged})
}



render(){

let icon;


//if(this.props.likedornot) Oldin shunaqa edi Backendsiz
if(this.state.Logged){
    icon = <img src = {require("../liked.png")} alt = "liked" height = "45px" onClick = {this.sendLike} />
} else {
    icon = <img src = {require("../like.png")} alt = "like" height = "45px" onClick = {this.unsendLike}/>
}

        return(
            <div>
                {icon}
            </div>
        )

        }
}

export default Liked;