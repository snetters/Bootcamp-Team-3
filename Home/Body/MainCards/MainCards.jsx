import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//jsx file for the Tracking, Organization, and Secure cards

import './MainCards.css';

class MainCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // {/*All three cards animate, flying from the bottom*/}
      
      <ul className="navBody MainCards w3-row-padding w3-center w3-margin-tops w3-lightblue">
        <li className="navList w3-third w3-animate-bottom">
          <div className="w3-card w3-container">
            <h3><strong>Tracking</strong></h3>
            <br />
            <i
              className="fa fa-arrows-alt w3-margin-bottom w3-jumbo"
              // style="font-size:120px"
            />
{/*            <a href="#" class="w3-bar-item w3-button w3-padding-16">
              <i class="fa fa-cog fa-fw"></i>
            </a>{' '}*/}
            <p>Real-time tracking of organizations</p>
            <p>Maintain donations with our system</p>
            <p>Find out what organizations are doing with your money</p>
          </div>
        </li>

        <li className="navList w3-third w3-animate-bottom">
          <div
            className="w3-card w3-container"
            // style="min-height:460px"
          >
            <h3><strong>Organizations</strong></h3>
            <br />
          <i
              className="fa fa-book w3-margin-bottom w3-jumbo"
              // style="font-size:120px"
          />

            <p>Trusted organizations with a great purpose</p>
            <p>Search for any non-profit here in the US</p>
            <p>Access to IRS Form 990</p>
          </div>
        </li>

        <li className="navList w3-third w3-animate-bottom">
          <div
            className="w3-card w3-container"
            // style="min-height:460px"
          >
            <h3><strong>Secure</strong></h3>
            <br />
            <i
              className="fa fa-anchor w3-margin-bottom w3-jumbo"
              // style="font-size:120px"
            />
{ /*           <a href="#" class="w3-bar-item w3-button w3-padding">
              <i class="fa fa-shield w3-margin-bottom w3-text-theme"></i>
</a>{' '}*/}
            <p>Reliable donation payment</p>
            <p>Secure technology to protect sensitive information</p>
            <p>Remain anonymous when donating</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default MainCards;
