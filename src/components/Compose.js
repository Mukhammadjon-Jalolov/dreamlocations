import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

class ComposePlace extends Component {

constructor(props){
    super(props);
    this.state = {selectedContinent: "",
    landscapesarray: [{landscape: 'Sea', val: false}, {landscape: 'Historical', val: false}, {landscape: 'Mountains', val: false}, {landscape: 'River', val: false}, {landscape: 'Beach', val: false}]
    }
    this.activateTravel = this.activateTravel.bind(this);
}

activateTravel(e){
  var versatile;
  for (var i=0; i < this.state.landscapesarray.length; i++){
      if (e == this.state.landscapesarray[i].landscape){
          var tempobj = JSON.parse(JSON.stringify(this.state.landscapesarray))
          tempobj[i].val = !tempobj[i].val
          
          this.setState({landscapesarray: tempobj})
          //versatile.continent = tempobj[i].continent
          versatile = {'landscape': tempobj}
      }
  }
  console.log(versatile)
  //this.props.sendback(versatile);
}

render(){
    return (
    <div>
      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "history")}>
        Historical
      </Button>
        {this.state.landscapesarray.map((result, index) => (
                      <input type = 'button' className = {result.val?'button':'button2'} value = {result.landscape} onClick = {this.activateTravel.bind(this, result.landscape)} />
        ))}
      
    </div>
            )
        }
}

export default ComposePlace;