import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import '../Appp.scss';

class Sustainable extends Component {

constructor(props){
    super(props)
}

//https://github.com/zwug/react-full-page

render(){
    const { t, i18n } = this.props;
    return (
        <div className = "Sustainable">
            <div className = "Inside">
				{t('description.traveling')}
            </div>
        </div>
            )
        }
}

export default withTranslation()(Sustainable);