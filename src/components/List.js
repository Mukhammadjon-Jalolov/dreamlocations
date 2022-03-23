import React, {Component} from 'react';
import '../Appp.scss';
import Gallery from 'react-grid-gallery';
import Liked from './Liked';
import { withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ListView extends Component {

constructor(props){
    super(props);
    this.state = {
        source: 'data:image/jpeg; base64, ',
        Logged: false,
		googlesearch: "http://www.google.com/search?q="
    }
    this.sendtoApp = this.sendtoApp.bind(this);
    this.sendtoAppnot = this.sendtoAppnot.bind(this);
}

componentDidMount(){
	
}

sendtoApp = (data) => {
    this.props.feedbacktoApp(data);
	console.log(this.props.i18n.language)
}

sendtoAppnot = (data, dislike) => {
    this.props.feedbacktoApp(data, dislike);
}

render(){
	const { t, i18n } = this.props;
    const oneplace = this.props.results.map((result, index) => (
    <div className = "Karta" key = {index}> <h3>{result.name} ({ result.country.uz == undefined ? t('description.'+result.country.gb):result.country[this.props.i18n.language]}) ({t('description.'+result.continent)}) <Liked likedornot = {result.yoqtir} place = {result.name} yeslike = {this.sendtoApp} notlike = {this.sendtoAppnot}/> </h3>
        <hr/>
		
		{result.description.uz == undefined ? t('description.'+result.description.gb):result.description[this.props.i18n.language]}
			
				<Gallery images = {result.images} margin = {2} maxRows = {1} />
				<br/>
				<Button variant="contained" onClick = {this.login} href = {this.state.googlesearch+result.name} target = "_blank"> 
					{t('description.more')}
				</Button> <br/><br/>
        </div>
    ))
    
        return(
            <div className = "Results">
                {oneplace}
            </div>
        )

        }
}

export default withTranslation()(ListView);