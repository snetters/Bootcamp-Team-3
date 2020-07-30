import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Top.css'

class Top extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div class="w3-bar w3-top w3-green w3-large" style="z-index:4">
            <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>  Menu</button>
            <span class="w3-bar-item w3-right">FundFlow</span>
            </div>

        )

    }

}

export default Top