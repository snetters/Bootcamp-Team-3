import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mySidebarRef = React.createRef();
    this.myOverlayRef = React.createRef();

    this.w3_open = this.w3_open.bind(this);
    this.w3_close = this.w3_close.bind(this);
  }

  // Toggle between showing and hiding the sidebar, and add overlay effect
  w3_open() {
    console.log('w3_open');
    console.log(this.mySidebarRef, this.myOverlayRef);
    // if (mySidebar.style.display === 'block') {
    //   mySidebar.style.display = 'none';
    //   overlayBg.style.display = 'none';
    // } else {
    //   mySidebar.style.display = 'block';
    //   overlayBg.style.display = 'block';
    // }
  }

  // Close the sidebar with the close button
  w3_close() {
    console.log('w3_close');
    console.log(this.mySidebarRef, this.myOverlayRef);
    // mySidebar.style.display = 'none';
    // overlayBg.style.display = 'none';
  }

  render() {
    return (
      <div>
        {/* Open Slidebar */}
        <div className="Top w3-bar w3-top w3-green w3-large">
          <button
            className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
            onClick={this.w3_open}
          >
            <i className="fa fa-bars" />  Menu
          </button>
          <span className="w3-bar-item w3-right">FundFlow</span>
        </div>

        <nav
          className="sidebarNav w3-sidebar w3-collapse w3-white w3-animate-left"
          id="mySidebar"
          ref={this.mySidebarRef}
        >
          <br />
          <div className="w3-container w3-row">
            <div className="w3-col s4">
              <img className="maxWidth" src="#" alt="User Profile Pic"></img>
            </div>
            <div className="w3-col s8 w3-bar w3-large">
              <span>
                Welcome, <strong>User</strong>
              </span>
              <br />
              {/* Add function to have clickable icons */}
              {/*<a href="#" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i></a>
                        <a href="#" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
                        <a href="#" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>*/}
            </div>
          </div>
          <hr />
          <div className="w3-container">
            <h5>Dashboard</h5>
          </div>
          <div className="w3-bar-block" onClick={this.w3_open}>
            {/* Add function to have clickable icons */}
            {/* <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick="w3_close()" title="close menu"><i class="fa fa-remove fa-fw"></i>  Close Menu</a>
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
        <div
          className="myOverlay w3-overlay w3-hide-large w3-animate-opacity"
          onClick={this.w3_close}
          title="close side menu"
          id="myOverlay"
          ref={this.myOverlayRef}
        ></div>
      </div>
    );
  }
}

export default Sidebar;
