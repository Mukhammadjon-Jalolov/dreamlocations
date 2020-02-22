import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';

class ImageComp extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, '
    }
}

render(){

    const Allimages = this.props.images.map((rasm, id) => (
        <p key = {id}> 
            {<img src = {this.state.source + rasm.img} />}
        </p>
        ))
    
    return (
    <div>
        {Allimages}
    </div>
            )
        }
}

export default ImageComp;