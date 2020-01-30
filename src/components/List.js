import React, {Component} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import ImageComp from './components/Imagecomponent';

class ListView extends Component {

constructor(props){
    super(props);
}

render(){

    const placeitem = this.props.results.map((result, id) => 
        <li key={id}>
            <div>
                <h3> {result.name} </h3><br/>
                {result.continent}<br/>
                {result.country}<br/>
                {result.description}<br/>
                <ImageComp results = {result} />
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

export default ListView;