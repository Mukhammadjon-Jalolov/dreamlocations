import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import ImageComp from './Imagecomponent';
import Gallery from 'react-grid-gallery';

class ListView extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, '
    }
}



render(){
    
    /*                                          THIS CODE SAMPLE BELOW WORKED!
    <ImageComp images = {result.images} />
    */
    const oneplace = this.props.results.map((result, index) => (
        <div key = {index}> <h2>{result.name}  ({result.continent})</h2>
         {result.description}
        
        <Gallery images = {result.images}/>
        </div>
))

        return(
            <div>
                {oneplace}
            </div>
        )

        }
}

export default ListView;