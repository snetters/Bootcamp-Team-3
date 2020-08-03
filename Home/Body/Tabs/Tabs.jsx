import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // {/*function to click on tabs and show paragraph*/}

  render() {
    return (
      <div className="Tabs"><hr /><br />
        <h2 className="w3-center">Our Tools</h2>
        <div className="navBody">
          <div className="w3-border">
            <ul className="navList">
              <li>
                <a
                  className="w3-bar-item w3-button testbtn w3-padding-16"
                  href="https://www.fullstackpython.com/flask.html"
                >
                  Database API
                </a>
                <div
                  id="databaseAPI"
                  className="w3-container city w3-animate-opacity"
                >
                 {/* <h2>Non-Profit Database API</h2>*/}
                  <p>
                    - Search for a non-profit in just a few seconds
                  </p>
                  <p>
                    - Our Non-Profit Database API gives you the ability to
                    search for any non-profit here in the US
                  </p>
                </div>
              </li>

              <li>
                <a
                  className="w3-bar-item w3-button testbtn w3-padding-16"
                  href="https://www.paypal.com/"
                >
                  PayPal
                </a>

                <div
                  id="Paypal"
                  className="w3-container city w3-animate-opacity"
                >
                  {/*<h2>PayPal</h2>*/}
                  <p>- Donate through our web app using PayPal</p>
                  <p>
                    - PayPal is a trusted payment service that will make sure your
                    donation is securely sent and received by a non-profit
                  </p>
                </div>
              </li>

              <li>
                <a
                  className="w3-bar-item w3-button testbtn w3-padding-16"
                  href="https://reactjs.org/"
                >
                  React
                </a>

                <div
                  id="React"
                  className="w3-container city w3-animate-opacity"
                >
                  {/*<h2>React</h2>*/}
                  <p>- Enjoying our web page?</p>
                  <p>
                    - Thanks to React, we are able to create an amazing web page
                    for you to enjoy. Navigating through our web app is easy and
                    fast!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Tabs;
