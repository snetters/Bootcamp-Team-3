import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Containers.css'

class Containers extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}

    }
  
  
    render() {
      return (
        <div class="w3-row-padding w3-margin-bottom">
            <div class="w3-third">
            <div class="w3-container w3-blue w3-padding-16 w3-hover-dark-grey">
                <div class="w3-left"><i class="fa fa-comment w3-xxxlarge"></i></div>
                <div class="w3-right">
                <h3>12</h3>
                </div>
                <div class="w3-clear"></div>
                <h4>Messages</h4>
            </div>
            </div>
            <div class="w3-third">
            <div class="w3-container w3-teal w3-padding-16 w3-hover-dark-grey">
                <div class="w3-left"><i class="fa fa-share-alt w3-xxxlarge"></i></div>
                <div class="w3-right">
                <h3>10</h3>
                </div>
                <div class="w3-clear"></div>
                <h4>Petitions Shared</h4>
            </div>
            </div>
            <div class="w3-third">
            <div class="w3-container w3-green w3-text-white w3-padding-16 w3-hover-dark-grey">
                <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
                <div class="w3-right">
                <h3>25</h3>
                </div>
                <div class="w3-clear"></div>
                <h4>My Organizations</h4>
            </div>
            </div>
        </div>
        /*</br>*/
        
      )

    }
}
  
  export default Containers