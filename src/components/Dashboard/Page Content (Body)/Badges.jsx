import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Badges.css'

class Badges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
        <div class="w3-container">
            <h5 class="w3-xlarge"><b>Badges</b></h5>
            <br />
            
            <div class="w3-container w3-cell">
            <div class="w3-card-4 w3-light-grey w3-hover-dark-grey" style="width:100%">
                <div class="w3-container w3-center" style="width:100%">
                <h3>Animal Lover</h3>
                <span class="w3-badge w3-xxxlarge w3-padding w3-brown"><i class="fa fa-paw w3-xxxlarge"></i></span>
                <h5><strong>Puppy Protector</strong>:</h5>
                <p>You've donated to <b>5</b> organizations who focus on animal care, rights, and protection! Your compassion for our furry and not so furry friends shows your love and respect for all creature!</p>
                </div>
            </div>
            </div>
        
            <div class="w3-container w3-cell">
            <div class="w3-card-4 w3-light-grey w3-hover-dark-grey" style="width:100%">
                <div class="w3-container w3-center" style="width:100%">
                <h3>Justice for All</h3>
                <span class="w3-badge w3-xxxlarge w3-padding w3-yellow"><i class="fa fa-balance-scale w3-xxxlarge"></i></span>
                <h5><strong>Justice League</strong>:</h5>
                <p>You've donated to <b>10</b> organizations who focus on justice for all who have been wronged, are innocent, and who fight for others to have a voice. Justice brings closure and brings us closer to an equal, fair, and just world!</p>
                </div>
            </div>
            </div>
        
            <div class="w3-container w3-cell">
            <div class="w3-card-4 w3-light-grey w3-hover-dark-grey" style="width:100%">
                <div class="w3-container w3-center" style="width:100%">
                <h3>Health and Wellness</h3>
                <span class="w3-badge w3-xxxlarge w3-padding w3-dark-grey"><i class="fa fa-hospital-o w3-xxxlarge"></i></span>
                <h5><strong>Medical School</strong>:</h5>
                <p>You've donated to <b>3</b> organizations who focus on health and wellness of individuals. Thank you for helping those who need it to reach their best selves, physically, emotionally, and mentally. </p>
                </div>
            </div>
            </div>
        
            <div class="w3-container w3-cell">
            <div class="w3-card-4 w3-light-grey w3-hover-dark-grey" style="width:100%">
                <div class="w3-container w3-center" style="width:100%">
                <h3>Fight Against Hunger</h3>
                <span class="w3-badge w3-xxxlarge w3-padding w3-green"><i class="fa fa-cutlery w3-xxxlarge"></i></span>
                <h5><strong>Hamburger Helper</strong>:</h5>
                <p>You've donated to <b>5</b> organizations who focus on food safety, health and accessibilty. With the amount of food grown, no one deserves to go hungry.</p>
                </div>
            </div>
            </div>
        </div>
    /*<hr />*/

    )
  }
}

export default Badges