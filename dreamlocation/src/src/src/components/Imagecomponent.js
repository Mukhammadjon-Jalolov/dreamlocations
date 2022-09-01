import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';

class ImageComp extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, ',
        rasmsaqla: []
    }
    this.createAlbum = this.createAlbum.bind(this)
}

componentDidMount(){
    var singlepic = []
    this.props.images.forEach(element => {
        var tempimg = {src: this.state.source + element.img, thumbnail: this.state.source + element.img, thumbnailWidth: 320,
            thumbnailHeight: 174}
        singlepic.push(tempimg)
    })
    this.createAlbum(singlepic)
}


createAlbum(data){
    this.setState({rasmsaqla: data})
}


render(){

    const Rasmlar = <Gallery images = {this.state.rasmsaqla} />
    
    return (
                <div>
                    {Rasmlar}
                    <br/>
                </div>
            )
        }
}

export default ImageComp;