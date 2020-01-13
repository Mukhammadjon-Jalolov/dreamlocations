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
    this.state = {selectedContinent: "" }
    this.activateTravel = this.activateTravel.bind(this);
}

activateTravel(e){
    console.log(e);
    window.alert(e);
}

render(){
    return (
    <div>
      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "history")}>
        Historical
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "mountain")}>
        Mountains
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "river")}>
        River
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "sea")}>
        Sea/Ocean
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "scyscraper")}>
        Scyscrapers
      </Button>

      <Button variant="outlined" color="primary" onClick = {this.activateTravel.bind(this, "forest")}>
        Forest
      </Button>
    </div>
            )
        }
}

export default ComposePlace;