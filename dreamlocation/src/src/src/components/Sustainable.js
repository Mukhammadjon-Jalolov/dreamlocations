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
				<h3 style = {{textAlign: "center"}}>{t('description.traveling')}</h3>
				<p> {t('description.b1')}{<a href = "https://www.goodwall.io/blog/benefits-of-traveling/">Goodwall</a>} {t('description.b2')} 
				<ul>
					<li> {t('description.l1')} </li>
					<li> {t('description.l2')} </li>
					<li> {t('description.l3')} </li>
					<li> {t('description.l4')} </li>
					<li> {t('description.l5')} </li>
					<li> {t('description.l6')} </li>
				</ul></p>
            </div>
			
        </div>
            )
        }
}

export default withTranslation()(Sustainable);