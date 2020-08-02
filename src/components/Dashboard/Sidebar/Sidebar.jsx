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
    if (this.mySidebar.style.display === 'block') {
      this.mySidebar.style.display = 'none';
      this.myOverlayRef.style.display = 'none';
    } else {
      this.mySidebar.style.display = 'block';
      this.myOverlayRef.style.display = 'block';
    }
  }

  // Close the sidebar with the close button
  w3_close() {
    console.log('w3_close');
    this.mySidebar.style.display = 'none';
    this.myOverlayRef.style.display = 'none';
  }

  render() {
    return (
      <div>
        Open Slidebar
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
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-envelope" />
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-user" />
              </a>
              <a href="#" className="w3-bar-item w3-button">
                <i className="fa fa-cog" />
              </a>
            </div>
          </div>
          <hr />
          <div className="w3-container">
            <h5>Dashboard</h5>
          </div>
          <div className="w3-bar-block" onClick={this.w3_open.bind(this)}>
            {/* Add function to have clickable icons */}
            <a
              href="#"
              className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
              // onClick="w3_close()"
              title="close menu"
            >
              <i className="fa fa-remove fa-fw"></i>  Close Menu
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
              <i className="fa fa-users fa-fw"></i>  Overview
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-dollar fa-fw"></i>  Donations
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-users fa-fw"></i>  My Organizations
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-certificate fa-fw"></i>  Badges
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-bullseye fa-fw"></i>  Find Organizations
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-bell fa-fw"></i>  News
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-history fa-fw"></i>  Donation History
            </a>{' '}
            <br />
            <a href="#" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-cog fa-fw"></i>  Settings
            </a>{' '}
            <br />
            <br />
            <br />
          </div>
        </nav>
        {/* Overlay effect of sidebar */}
        <div
          className="myOverlay w3-overlay w3-hide-large w3-animate-opacity"
          onClick={this.w3_close.bind(this)}
          title="close side menu"
          id="myOverlay"
          ref={this.myOverlayRef}
        ></div>
      </div>
    );
  }
}

export default Sidebar;
