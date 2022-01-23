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
	const continentsarrayst = [{continent: 'description.Europe', landtype: "europe", val: false}, {continent: 'description.Asia', landtype: "europe", val: false}, {continent: 'description.Africa', landtype: "europe", val: false}, {continent: 'description.North_America', landtype: "europe", val: false}, {continent: 'description.South_America', landtype: "europe", val: false}, {continent: 'description.Australia_Oceania', landtype: "europe", val: false}]
	
	localStorage.getItem("continentsarraystorage") ? this.setState({continentsarray: JSON.parse(localStorage.getItem("continentsarraystorage"))}) : this.setState({continentsarray: continentsarrayst})
}

activateTravel(e){
    for (var i=0; i < this.state.continentsarray.length; i++){
        if (e == this.state.continentsarray[i].continent){
            var tempobj = JSON.parse(JSON.stringify(this.state.continentsarray))
            tempobj[i].val = !tempobj[i].val
            
            this.setState({continentsarray: tempobj})
            //versatile.continent = tempobj[i].continent
        }
    }
    console.log(tempobj)
    this.props.sendcontinent(tempobj); // Bu yerda versatile bor edi
}

render(){
	const { t, i18n } = this.props;
    return (
    <div>
			{this.state.continentsarray.map((result, index) => (
				<input type = 'button' className = {result.val?'button':'button2'} value = {t(result.continent)} onClick = {this.activateTravel.bind(this, result.landtype)} />
			))}

    </div>
            )
        }
}

export default withTranslation()(Continents);