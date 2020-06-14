import React, {Component} from 'react';
import '../App.css';

class Liked extends Component {

constructor(props){
    super(props);
    this.sendLike = this.sendLike.bind(this);
    this.unsendLike = this.unsendLike.bind(this);
}



sendLike = () => {
    console.log("Like image is " + this.props.place)
}

unsendLike = () => {
    console.log("Not Like")
}



render(){

let icon;

if(this.props.likedornot){
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