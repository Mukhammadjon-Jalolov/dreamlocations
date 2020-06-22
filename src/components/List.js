import React, {Component} from 'react';
import '../App.css';
import Gallery from 'react-grid-gallery';
import Liked from './Liked';

class ListView extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, ',
        Logged: false
    }
}

componentDidMount(){
    console.log(this.props.name)
}

render(){

    const oneplace = this.props.results.map((result, index) => (
    <div className = "Card" key = {index}> <h2>{result.name}  ({result.continent}) <Liked likedornot = {result.yoqtir} place = {result.name}/> </h2>
        {result.description}
            <Gallery images = {result.images} margin = {2}/>
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