import React, {Component} from 'react';
import '../App.css';

class Liked extends Component {

constructor(props){
    super(props);

    this.sendLike = this.sendLike.bind(this);
    this.unsendLike = this.unsendLike.bind(this);
}

sendLike = () => {
    //console.log("Liked image is " + this.props.place) // 
    this.props.yeslike(this.props.place)
}

unsendLike = () => {
    var dislike = true
    this.props.notlike(this.props.place, dislike)
    //console.log("Not Like")
}


render(){

let icon;


//if(this.props.likedornot) Oldin shunaqa edi Backendsiz
if(this.props.likedornot){
    icon = <img src = {require("../liked.png")} alt = "liked" height = "45px" onClick = {this.unsendLike} />
} else {
    icon = <img src = {require("../like.png")} alt = "like" height = "45px" onClick = {this.sendLike}/>
}

        return(
            <div>
                {icon}
            </div>
        )

        }
}

export default Liked;