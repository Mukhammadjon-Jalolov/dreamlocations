import React, {Component} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';

class About extends Component {

constructor(props){
    super(props);
}

render(){
	const { t, i18n } = this.props;
    return (
		<div className = "Sustainable">
            <div className = "Inside">
                {t('description.howtouse')}
            </div>
			<br/>
			<div className = "Inside">
                {t('description.aboutme')}
            </div>
        </div>
            )
        }
}

export default withTranslation()(About);