import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Link } from 'react-router-dom';

import MyDonations from './Logged/MyDonations/MyDonations';
import MyProfile from './Logged/MyProfile/MyProfile';
import Forms from './Logged/Forms/Forms';
import Payment from './Logged/Payment/Payment';

import Unlogged from './Unlogged/Unlogged';
import LoggedIn from './Logged/LoggedIn/LoggedIn';

import CreateAccountVerified from './Logged/CreateAccountVerified/CreateAccountVerified';
import LoginVerified from './Logged/LoginVerified/LoginVerified';

import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.appState.username,
      pass: this.props.appState.pass,
      loggedIn: this.props.appState.loggedIn,
    };
    this.saveUp = this.saveUp.bind(this);
    this.unloggedMode = this.unloggedMode.bind(this);
    this.loggedMode = this.loggedMode.bind(this);
  }

  saveUp(state) {
    this.setState({
      username: state.username,
      pass: state.pass,
      loggedIn: state.verified,
    });
    console.log('saveUp ', this.state);
    this.props.saveUp(this.state);
  }

  unloggedMode() {
    return (
      <div className="UnloggedMode">
        <title> Unlogged Mode </title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="Profile.css" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
        />

        <Switch>
          <Route
            exact
            path="/profile"
            render={() => <Unlogged saveUp={this.saveUp} state={this.state} />}
          />
        </Switch>
      </div>
    );
  }

  loggedMode() {
    return (
      <div className="LoggedMode">
        <title> LoggedMode </title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="Profile.css" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
        />

        <ul className="navList">
          <Link className="navLinks" to="/profile/myDonations">
            <li>My Donations</li>
          </Link>

          <Link className="navLinks" to="/profile/myProfile">
            <li>About Me</li>
          </Link>

          <Link className="navLinks" to="/profile/subscriptions">
            <li>Subscriptions</li>
          </Link>

          <Link className="navLinks" to="/profile/payment">
            <li>Payment</li>
          </Link>
        </ul>

        <Switch>
          <Route exact path="/profile" component={LoggedIn} />

          <Route
            exact
            path="/profile/createAccount"
            component={CreateAccountVerified}
          />
          <Route exact path="/profile/login" component={LoginVerified} />

          <Route
            exact
            path="/profile/myDonations"
            render={() => <MyDonations saveUp={this.saveUp} />}
          />

          <Route
            exact
            path="/profile/myProfile"
            render={() => (
              <MyProfile saveUp={this.saveUp} profState={this.state} />
            )}
          />

          <Route
            exact
            path="/profile/subscriptions"
            render={() => <Forms saveUp={this.saveUp} profState={this.state} />}
          />

          <Route exact path="/profile/payment" render={() => <Payment />} />
        </Switch>
      </div>
    );
  }

  render() {
    if (this.state.loggedIn) {
      return this.loggedMode();
    }
    return this.unloggedMode();
  }
}

Profile.propTypes = {
  appProps: PropTypes.objectOf(PropTypes.any),
};

Profile.defaultProps = {
  appProps: {
    appState: {
      username: 'username',
      pass: 'Password',
      loggedIn: false,
    },
  },
};

export default Profile;
