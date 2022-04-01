import React, {Component} from 'react';
import '../Appp.scss';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { withTranslation } from 'react-i18next';

class Liked extends Component {

constructor(props){
    super(props);

    this.sendLike = this.sendLike.bind(this);
    this.unsendLike = this.unsendLike.bind(this);
}

sendLike = () => {
	const { t, i18n } = this.props;
    this.props.yeslike(this.props.place)
	if(!localStorage.getItem("LoggedIn")){
		NotificationManager.warning(t('description.loginreminder'), t('description.logintolike'), 3000);
	} else {
		NotificationManager.success(t('description.savedtofavs'), this.props.place[this.props.i18n.language]);
	}
}

unsendLike = () => {
	const { t, i18n } = this.props;
    var dislike = true
    this.props.notlike(this.props.place, dislike)
}


render(){

let icon;


//if(this.props.likedornot) Oldin shunaqa edi Backendsiz
if(this.props.likedornot){
    icon = <img src = {require("../liked.png")} alt = "liked" height = "45px" onClick = {this.unsendLike} />
} else {
    icon = <img src = {require("../like.png")} alt = "like" height = "45px" onClick = {this.sendLike} />
}

        return(
            <div>
                {icon}
            </div>
        )

        }
}

export default withTranslation()(Liked);