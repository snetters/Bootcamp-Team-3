import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Recommended.css'

class Recommended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
        <div class="w3-container">
            <h5>Recommended Organizations</h5>
            <p>Here are the organizations we think you'd like to donate to </p>
            <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
            <tr>
                <th>Organization Type</th>
                <th>Organization Name</th>
                <th>Location</th>
            </tr>
            <tr>
                <td><i class="fa fa-blind w3-text-green w3-large"></i></td>
                <td>Non-profit A</td>
                <td>Vermont</td>
            </tr>
            <tr>
                <td><i class="fa fa-child w3-text-blue w3-large"></i></td> 
                <td>Non-profit B</td>
                <td>Delaware</td>
            </tr>
            <tr>
                <td><i class="fa fa-cutlery w3-text-green w3-large"></i></td>
                <td>Non-profit C</td>
                <td>Washington</td>
            </tr>
            <tr>
                <td><i class="fa fa-balance-scale w3-text-red w3-large"></i></td>
                <td>Non-profit D</td>
                <td>Alabama</td>
            </tr>
            <tr>
                <td><i class="fa fa-paw w3-text-yellow w3-large"></i></td>
                <td>Non-profit E</td>
                <td>Michigan</td>
            </tr>
            <tr>
                <td><i class="fa fa-hospital-o w3-text-blue w3-large"></i></td>
                <td>Non-profit F</td>
                <td>New York</td>
            </tr>
            </table><br />
            {/* Add function to make a clickable button*/}
            <button class="w3-button w3-dark-grey">More Organizations <i class="fa fa-arrow-right"></i></button>
        </div>
    
    /*<br />*/

    )
  }
}

export default Recommended