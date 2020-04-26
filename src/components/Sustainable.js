import React, {Component} from 'react';


import '../App.css';

class Sustainable extends Component {

constructor(props){
    super(props)
    this.state = {
        information: "The word “overtourism” is so new it does not yet appear in most dictionaries (although it was shortlisted as a Word of the Year in 2018). But the novelty of the term has not diminished the impact of its meaning: “An excessive number of tourist visits to a popular destination or attraction, resulting in damage to the local environment and historical sites and in poorer quality of life for residents,” according to the Oxford Dictionary shortlist. (Read more about how to turn overtourism into sustainable global tourism.) As travelers wake up, sometimes abruptly, to the challenges of joining some 1.4 billion other tourists to the world’s most enticing destinations, the threats—and consequences—of overtourism are becoming more visible each day. The UN World Tourism Organization, along with public and private sector partners, has declared September 27 as World Tourism Day and uses this platform to discuss tourism’s social, political, economic, and environmental impacts. This day highlights the importance of sustainable tourism—a framework for engaging travelers and the travel industry at large in supporting goals that include protecting the environment, addressing climate change, minimizing plastic consumption, and expanding economic development in communities affected by tourism."
    }
}

render(){
    
    return (
        <div className = "Sustainable">
            <div className = "Inside">
                {this.state.information}
            </div>
        </div>
            )
        }
}

export default Sustainable;