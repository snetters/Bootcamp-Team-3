import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './BottomBar.css'

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }


  render() {
    return (
        <div class="w3-container w3-dark-grey w3-padding-32 ">
            <div class="w3-row">
            <div class="w3-container w3-third">
                <h5 class="w3-bottombar w3-border-green">Features</h5>
                <p>PayPal Donations</p>
                <p>Non-profit Database</p>
                <p>IRS Form 990</p>
            </div>
            <div class="w3-container w3-third">
                <h5 class="w3-bottombar w3-border-red">Our Web App</h5>
                <p>Why FundFlow?</p>
                <p>About Us</p>
                <p>User Stories</p>
            </div>
            <div class="w3-container w3-third">
                <h5 class="w3-bottombar w3-border-orange">Resources</h5>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
                <p>FAQ</p>
            </div>
            </div>
        </div>
    )
  }
}

export default BottomBar