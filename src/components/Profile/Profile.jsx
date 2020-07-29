import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route, Link } from 'react-router-dom'

import CreateAccountForm from './Unlogged/CreateAccountForm/CreateAccountForm'
import LoginForm from './Unlogged/LoginForm/LoginForm'

import MyDonations from './Logged/MyDonations/MyDonations'
import MyProfile from './Logged/MyProfile/MyProfile'

import Unlogged from './Unlogged/Unlogged/Unlogged'
import LoggedIn from './Logged/LoggedIn/LoggedIn'

import CreateAccountVerified from './Logged/CreateAccountVerified/CreateAccountVerified'
import LoginVerified from './Logged/LoginVerified/LoginVerified'

import './Profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.appState.username,
      pass: this.props.appState.pass,
      loggedIn: this.props.appState.loggedIn,
    }
    this.saveUp = this.saveUp.bind(this)
    this.unloggedMode = this.unloggedMode.bind(this)
    this.loggedMode = this.loggedMode.bind(this)
  }

  saveUp(state) {
    this.setState({
      username: state.username,
      pass: state.pass,
      loggedIn: state.verified,
    })
    console.log('saveUp ', this.state)
    this.props.saveUp(this.state)
  }

  unloggedMode() {
    return (
      <div className="UnloggedMode">
        <ul className="navList">
          <Link className="navLinks" to="/profile/createAccount">
            <li>Create Account</li>
          </Link>

          <Link className="navLinks" to="/profile/login">
            <li>Login</li>
          </Link>
        </ul>

        <Switch>
          <Route exact path="/profile" component={Unlogged} />

          <Route
            exact
            path="/profile/createAccount"
            render={() => <CreateAccountForm saveUp={this.saveUp} />}
          />

          <Route
            exact
            path="/profile/login"
            render={() => <LoginForm saveUp={this.saveUp} />}
          />
        </Switch>
      </div>
    )
  }

  loggedMode() {
    return (
      <div className="LoggedMode">
        <ul className="navList">
          <Link className="navLinks" to="/profile/myDonations">
            <li>My Donations</li>
          </Link>

          <Link className="navLinks" to="/profile/myProfile">
            <li>About Me</li>
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
        </Switch>
      </div>
    )
  }

  render() {
    if (this.state.loggedIn) {
      return this.loggedMode()
    }
    return this.unloggedMode()
  }
}

Profile.propTypes = {
  appState: PropTypes.objectOf(PropTypes.any),
  saveUp: PropTypes.func,
}

Profile.defaultProps = {
  appState: {
    username: 'username',
    pass: 'Password',
    loggedIn: false,
  },
}

export default Profile
