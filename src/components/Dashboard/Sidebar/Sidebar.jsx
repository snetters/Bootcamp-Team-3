import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Sidebar.css'

class Sidebar extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br />
                    <div class="w3-container w3-row">
                        <div class="w3-col s4">
                            <img src="#" style="width:100%" alt="User Profile Pic"></img>
                        </div>
                        <div class="w3-col s8 w3-bar w3-large">
                        <span>Welcome, <strong>User</strong></span><br />
                        {/* Add function to have clickable icons */}
                        {/*<a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
                        <a href="#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
                        <a href="#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>*/}
                        </div>
                    </div>
                    <hr />
                    <div class="w3-container">
                        <h5>Dashboard</h5>
                    </div>
                    <div class="w3-bar-block">
                        {/* Add function to have clickable icons */}
                       {/* <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>  Close Menu</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fa fa-users fa-fw"></i>  Overview</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-dollar fa-fw"></i>  Donations</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-users fa-fw"></i>  My Organizations</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-certificate fa-fw"></i>  Badges</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bullseye fa-fw"></i>  Find Organizations</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-bell fa-fw"></i>  News</a>
                        <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-history fa-fw"></i>  Donation History</a>
                    <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-cog fa-fw"></i>  Settings</a><br /><br /> */}
                    </div>
                </nav>

                {/* Overlay effect of sidebar */}
                <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" 
                style="cursor:pointer" title="close side menu" id="myOverlay">
                </div>

            </div>
        )

    }

}

export default Sidebar