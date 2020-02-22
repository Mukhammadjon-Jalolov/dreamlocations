import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import ImageComp from './Imagecomponent';

class ListView extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, '
    }
}

render(){

    const people = [
        {
          name: 'chris',
          pets: [
            { name: 'bella', type: 'dog' },
            { name: 'cocoa', type: 'dog' }
          ]
        },
        {
          name: 'nick',
          pets: [
            { name: 'hilo', type: 'cat' },
            { name: 'polly', type: 'cat' }
          ]
        }
      ];


    /*
    const placeitem = this.props.results.map((result, id) => 
        <li key={id}>
            <div>
                <h3> {result.name} </h3><br/>
                {result.continent}<br/>
                {result.country}<br/>
                {result.description}<br/>
                {<img src = {this.state.source + result.images[0].img} />}

                {result.images.map((image, id) => 
                    <li key = {id}>
                        {<img src = {this.state.source + image.img} />}
                    </li>
                )}
            </div>
        </li>
    );*/
    
    /*                          THIS CODE SAMPLE BELOW WORKED!
    return (
    
        <div>
            <ul>
                { this.props.results.map((result, id) => 
                        <li key = {id}>
                            {result.name}
                        </li>
                    )
                }
            </ul>
        </div>)
        */

        return(
            <div>
                {this.props.results.map((result, index) => (
                        <div key = {index}> <h2>{result.name}</h2> <br/>
                        <h3>{result.continent}</h3> {result.description}
                        <ImageComp images = {result.images} />
                        </div>
                ))}
            </div>
        )

        }
}

export default ListView;