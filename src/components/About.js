import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class About extends Component {

constructor(props){
    super(props);
    this.state = {
    }
}



render(){
    var info = "Hello to About Page"
    return (
                <div>
                    {info}
                </div>
            )
        }
}

export default About;