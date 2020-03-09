import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class ComposePlace extends Component {

constructor(props){
    super(props);
    this.state = {selectedContinent: "",
    landscapesarray: [{landtype: 'sea', val: false}, {landtype: 'history', val: false}, {landtype: 'mountains', val: false}, {landtype: 'river', val: false}, {landtype: 'beach', val: false}, {landtype: 'skyscrapers', val: false}, {landtype: 'desert', val: false}]
    }
    this.activateTravel = this.activateTravel.bind(this);
}

activateTravel(e){
  var versatile;
  for (var i=0; i < this.state.landscapesarray.length; i++){
      if (e == this.state.landscapesarray[i].landtype){
          var tempobj = JSON.parse(JSON.stringify(this.state.landscapesarray))
          tempobj[i].val = !tempobj[i].val
          
          this.setState({landscapesarray: tempobj})
          //versatile.continent = tempobj[i].continent
          versatile = {landscape: tempobj}
      }
  }
  console.log(tempobj)
  this.props.sendlandscape(tempobj); // bu yerda versatile bor edi
}

render(){
    return (
    <div>
        {this.state.landscapesarray.map((result, index) => (
          <input type = 'button' className = {result.val?'button':'button2'} value = {result.landtype} onClick = {this.activateTravel.bind(this, result.landtype)} />
        ))}
    </div>
            )
        }
}

export default ComposePlace;