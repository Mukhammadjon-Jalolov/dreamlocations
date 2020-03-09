import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Continents extends Component {

constructor(props){
  super(props);
    this.state = {selectedContinent: "",
    continentsarray: [{continent: 'Europe', val: false}, {continent: 'Asia', val: false}, {continent: 'Africa', val: false}, {continent: 'North America', val: false}, {continent: 'South America', val: false}, {continent: 'Australia', val: false}]
    }
    this.activateTravel = this.activateTravel.bind(this);
}

activateTravel(e){
    var versatile;
    for (var i=0; i < this.state.continentsarray.length; i++){
        if (e == this.state.continentsarray[i].continent){
            var tempobj = JSON.parse(JSON.stringify(this.state.continentsarray))
            tempobj[i].val = !tempobj[i].val
            
            this.setState({continentsarray: tempobj})
            //versatile.continent = tempobj[i].continent
            versatile = {continent: tempobj}
        }
    }
    console.log(tempobj)
    this.props.sendcontinent(tempobj); // Bu yerda versatile bor edi
}

render(){
    return (
    <div>
                {this.state.continentsarray.map((result, index) => (
                    <input type = 'button' className = {result.val?'button':'button2'} value = {result.continent} onClick = {this.activateTravel.bind(this, result.continent)} />
                ))}
    


    </div>
            )
        }
}

export default Continents;