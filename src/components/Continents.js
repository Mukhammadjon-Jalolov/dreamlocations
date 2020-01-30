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

class Continents extends Component {

constructor(props){
    super(props);
    this.state = {selectedContinent: "" }
    this.activateTravel = this.activateTravel.bind(this);
}

activateTravel(e){
    this.props.sendback(e);
}

render(){
    return (
    <div>
      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "europe")}>
        Europe
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "asia")}>
      Asia
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "africa")}>
      Africa
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "namerica")}>
      North America
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "samerica")}>
      South America
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "australia")}>
      Oceania
      </Button>
    </div>
            )
        }
}

export default Continents;