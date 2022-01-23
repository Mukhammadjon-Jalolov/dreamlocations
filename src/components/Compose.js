import React, {Component} from 'react';
import '../App.css';
import { withTranslation } from 'react-i18next';

class ComposePlace extends Component {

constructor(props){
    super(props);
	const { t, i18n } = this.props;
	
    this.state = {selectedContinent: "",
    landscapesarray: []
    }
    this.activateTravel = this.activateTravel.bind(this);
}

componentDidMount(){
	const landscapesarrayst = [{landname: 'description.sea', landtype: "sea", val: false}, {landname: 'description.history', landtype: "history", val: false}, {landname: 'description.mountains', landtype: "mountains", val: false}, {landname: 'description.river', landtype: "river", val: false}, {landname: 'description.beach', landtype: "beach", val: false}, {landname: 'description.skyscrapers', landtype: "skyscrapers", val: false}, {landname: 'description.desert', landtype: "desert", val: false}];
	
	localStorage.getItem("landscapesarraystorage") ? this.setState({landscapesarray: JSON.parse(localStorage.getItem("landscapesarraystorage"))}) : this.setState({landscapesarray: landscapesarrayst})
}

componentDidUpdate(prevProps){
	if(this.props !== prevProps){
		console.log("It happened!")
	}
}

activateTravel(e){
  var versatile;
  for (var i=0; i < this.state.landscapesarray.length; i++){
      if (e == this.state.landscapesarray[i].landtype){
          var tempobj = JSON.parse(JSON.stringify(this.state.landscapesarray))
          tempobj[i].val = !tempobj[i].val
          
		  localStorage.setItem("landscapesarraystorage", JSON.stringify(tempobj));
          this.setState({landscapesarray: tempobj})
          //versatile.continent = tempobj[i].continent
          versatile = {landscape: tempobj}
      }
  }
  console.log(tempobj)
  console.log(this.state.landscapesarray)
  
  this.props.sendlandscape(tempobj); // bu yerda versatile bor edi
}

render(){
	const { t, i18n } = this.props;
    return (
    <div>
        {this.state.landscapesarray.map((result, index) => (
          <input type = 'button' className = {result.val?'button':'button2'} value = {t(result.landname)} onClick = {this.activateTravel.bind(this, result.landtype)} />
        ))}
    </div>
            )
        }
}

export default withTranslation()(ComposePlace);