import React, {Component} from 'react';
import '../Howto.css';
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
		<div className = "How">
            <div className = "Howinside">
                {t('description.howtouse')}
            </div>
			<br/>
			<div className = "Howinside">
                {t('description.aboutme')}
            </div>
        </div>
            )
        }
}

export default withTranslation()(About);