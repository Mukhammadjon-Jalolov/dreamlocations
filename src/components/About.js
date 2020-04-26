import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class About extends Component {

constructor(props){
    super(props);
    this.state = {
        about: "This site was developed by me to assist people to find their dream travel destination. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
}

render(){
    return (
                <div className = "About">
                <div className = "Inside">
                    {this.state.about}
                </div>
                </div>
            )
        }
}

export default About;