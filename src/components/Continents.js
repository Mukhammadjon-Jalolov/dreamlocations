import React, {Component} from 'react';
import '../App.css';
import { withTranslation } from 'react-i18next';

class Continents extends Component {

constructor(props){
  super(props);
	const { t, i18n } = this.props;
    this.state = {
		selectedContinent: "",
		continentsarray: []
	}
    this.activateTravel = this.activateTravel.bind(this);
}

componentDidMount(){
	const continentsarrayst = [{conttype: 'description.Europe', continent: "Europe", val: false}, {conttype: 'description.Asia', continent: "Asia", val: false}, {conttype: 'description.Africa', continent: "Africa", val: false}, {conttype: 'description.North_America', continent: "North_America", val: false}, {conttype: 'description.South_America', continent: "South_America", val: false}, {conttype: 'description.Australia_Oceania', continent: "Australia_Oceania", val: false}]
	
	localStorage.getItem("continentarraystorage") ? this.setState({continentsarray: JSON.parse(localStorage.getItem("continentarraystorage"))}) : this.setState({continentsarray: continentsarrayst})
	
	//this.props.sendcontinent(JSON.parse(localStorage.getItem("continentarraystorage")))
	//console.log(JSON.parse(localStorage.getItem("continentarraystorage")))
}

activateTravel(e){
    for (var i=0; i < this.state.continentsarray.length; i++){
        if (e == this.state.continentsarray[i].continent){
            var tempobj = JSON.parse(JSON.stringify(this.state.continentsarray))
            tempobj[i].val = !tempobj[i].val
            
			localStorage.setItem("continentarraystorage", JSON.stringify(tempobj));
            this.setState({continentsarray: tempobj})
            //versatile.conttype = tempobj[i].conttype
        }
    }
    //console.log(tempobj)
    this.props.sendcontinent(tempobj); // Bu yerda versatile bor edi
}

render(){
	const { t, i18n } = this.props;
    return (
<div>
	{this.state.continentsarray.map((result, index) => (
		<input type = 'button' className = {result.val?'button':'button2'} value = {t(result.conttype)} onClick = {this.activateTravel.bind(this, result.continent)} key = {index}/>
	))}

</div>
	
	)
	}
}

export default withTranslation()(Continents);