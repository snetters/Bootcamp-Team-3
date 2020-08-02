import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
    <div className="navBody">
      {/* <div className="Top w3-bar w3-top w3-green w3-large">
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick={this.w3_open.bind(this)}
        >
          <i className="fa fa-bars" />  Menu
        </button>
        <span className="w3-bar-item w3-right">FundFlow</span>
      </div> */}

      <nav className="navSections w3-top">
        <ul className="navList">
          <Link className="navLinks" to="/">
            <li>Home</li>
          </Link>

          <Link className="navLinks" to="/about">
            <li>About</li>
          </Link>

          <Link className="navLinks" to="/orgSearch">
            <li>Organization Search</li>
          </Link>

          <Link className="navLinks" to="/profile">
            <li>Profile</li>
          </Link>

          <Link className="navLinks" to="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link className="navLinks" to="/rus">
            <li>Rus</li>
          </Link>

          <div className="navLinks">
            <input type="search" placeholder="Search..." />
          </div>

          {/* <Link className="navLinks" to="/hez">
            <li>Hez</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
