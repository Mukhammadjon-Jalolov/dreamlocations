import React, {Component} from 'react';
import '../Appp.scss';
import { withTranslation } from 'react-i18next';

class ComposePlace extends Component {

constructor(props){
    super(props);
	const { t, i18n } = this.props;
    this.state = {
	selectedContinent: "",
    landscapesarray: []
    }
    this.activateTravel = this.activateTravel.bind(this);
}

componentDidMount(){
	const landscapesarrayst = [{landname: 'description.sea', landtype: "sea", val: false}, {landname: 'description.mountains', landtype: "mountains", val: false}, {landname: 'description.river', landtype: "river", val: false}, {landname: 'description.beach', landtype: "beach", val: false}, {landname: 'description.desert', landtype: "desert", val: false}, {landname: 'description.skyscrapers', landtype: "skyscrapers", val: false}, {landname: 'description.history', landtype: "history", val: false}, {landname: 'description.medieval', landtype: "medieval", val: false}, {landname: 'description.ancient', landtype: "ancient", val: false}];
	
	localStorage.getItem("landscapesarraystorage") ? this.setState({landscapesarray: JSON.parse(localStorage.getItem("landscapesarraystorage"))}) : this.setState({landscapesarray: landscapesarrayst})
	
	//this.props.sendlandscape(JSON.parse(localStorage.getItem("landscapesarraystorage")))
	//console.log(JSON.parse(localStorage.getItem("landscapesarraystorage")))
}


activateTravel(e){
  var versatile;
  for (var i=0; i < this.state.landscapesarray.length; i++){
      if (e == this.state.landscapesarray[i].landtype){
          var tempobj = JSON.parse(JSON.stringify(this.state.landscapesarray))
          tempobj[i].val = !tempobj[i].val
          
		  localStorage.setItem("landscapesarraystorage", JSON.stringify(tempobj));
          this.setState({landscapesarray: tempobj})
      }
  }
  
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