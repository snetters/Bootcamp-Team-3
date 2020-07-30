import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './myTable.css'

class myTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }


  render() {
    return (
        <div class="w3-panel">
            <div class="w3-row-padding" style="margin:0 -16px">
            <div class="w3-third">
                <h5><b>Regions</b></h5>
                <p>Here's where you've donated</p>
                <img src="https://23i69d6p0gw1zwz4y3smspc1-wpengine.netdna-ssl.com/wp-content/uploads/sites/25/cnt-import/sew/IMG/671/260671/google-analytics-usa-map.jpg" style="width:100%" alt="Google USA Regional Map"></img>
            
            </div>
            <div class="w3-twothird">
                <h5><b>My Organizations</b></h5>
                <p>Here are the organizations you've donated to:</p>
                <table class="w3-table w3-striped w3-white w3-hoverable">
                <tr>
                    <th>Organization Type</th>
                    <th>Organization Name</th>
                    <th>Times Donated</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td><i class="fa fa-child w3-text-blue w3-large"></i></td>
                    <td>Organization A</td>
                    <td class="w3-center">10</td>
                    <td><i>California</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-balance-scale w3-text-red w3-large"></i></td>
                    <td>Organization B</td>
                    <td class="w3-center">8</td>
                    <td><i>Georgia</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-paw w3-text-yellow w3-large"></i></td>
                    <td>Organization C</td>
                    <td class="w3-center">7</td>
                    <td><i>Florida</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-hospital-o w3-text-blue w3-large"></i></td>
                    <td>Organization D</td>
                    <td class="w3-center">5</td>
                    <td><i>Texas</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-blind w3-text-green w3-large"></i></td>
                    <td>Organizaton E</td>
                    <td class="w3-center">3</td>
                    <td><i>New York</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-balance-scale w3-text-red w3-large"></i></td>
                    <td>Organization F</td>
                    <td class="w3-center">1</td>
                    <td><i>California</i></td>
                </tr>
                <tr>
                    <td><i class="fa fa-handshake-o w3-text-green w3-large"></i></td>
                    <td>Organization G</td>
                    <td class="w3-center">1</td>
                    <td><i>Texas</i></td>
                </tr>
                </table><br />
                {/* Add function to make a clickable button*/}
                <button class="w3-button w3-dark-grey">Show More <i class="fa fa-arrow-down"></i></button>
            </div>
            </div>
        </div>
    /*<hr />*/

    )
  }
}

export default myTable