import React from 'react';

import Modal from './Modal/Modal';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.modalRef = React.createRef();
  }

  onClick() {
    this.setState(() => ({}));
  }

  render() {
    return (
      <header className="Header w3-container w3-theme w3-padding" id="myHeader">
        {/* This code was getting in the way of the nav button */}
        {/* Button to access the quick navigation */}
        {/* <input
              type="button"
              className="fa fa-bars w3-xlarge w3-button w3-theme"
            /> */}
        <div className="w3-center w3-text-white">
          <h4>Donations without the frustrations</h4>
          <h1 className="w3-xxxlarge w3-animate-bottom">FundFlow</h1>
        </div>
        {/* Modal Component */}
        <Modal modalRef={this.modalRef} onClick={this.onModalClick} />
      </header>
    );
  }
}

export default Header;
