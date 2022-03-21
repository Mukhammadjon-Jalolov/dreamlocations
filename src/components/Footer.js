import React, {Component} from 'react';
import '../Appp.scss';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import '../bootstrap.css';

class Footer extends Component {

constructor(props){
    super(props);
}

render(){
	const { t, i18n } = this.props;
    return (
			
				<div className="footer-dark">
				<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-3 item">
							<h3>Travel info</h3>
							<ul>
								<li><a href="https://www.planetware.com/world/top-rated-tourist-attractions-in-the-world-cam-1-40.htm" target = "_blank">Top destinations</a></li>
								<li><a href="https://www.rd.com/list/most-remote-places-on-earth/" target = "_blank">Most remote places</a></li>
								<li><a href="#">Least inhabited places</a></li>
							</ul>
						</div>
						<div className="col-sm-6 col-md-3 item">
							<h3>Contact</h3>
							<ul>
								<li><a href="#">mjalolov91@gmail.com</a></li>
								<li><a href="#">Partnership</a></li>
								<li><a href="#">Feedback</a></li>
							</ul>
						</div>
						<div className="col-md-6 item text">
							<h3>About us</h3>
							<p>This site allows you to find your dream travel location. Choosing continents and landscape types including urban areas, you can find ideal places you desire!</p>
						</div>
						<div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
					</div>
					<p className="copyright">Dream Location © 2022</p>
				</div>
				</footer>
				</div>
			
			)
        }
}

export default withTranslation()(Footer);