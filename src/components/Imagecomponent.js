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

    const placeitem = this.props.results.pictures.map((result, id) => 
        <li key={id}>
            <div>
                <img src = {this.state.source + result.img} />
            </div>
        </li>
    );

    return (
    <div>
        <ul>
                {placeitem}
        </ul>
    </div>
            )
        }
}

export default ImageComp;