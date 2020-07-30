import React from 'react'
import PropTypes from 'prop-types'

import './LoginForm.css'

import axios from 'axios'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      pass: '',
      verified: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginGetReq = this.loginGetReq.bind(this)
    this.loginReq = this.loginPostReq.bind(this)
  }

  componentDidMount() {
    this.setState({ username: 'initUsername', pass: 'initPass' })
  }

  handleInputChange(event) {
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submitted form =', this.state)

    // API request
    // this.loginGetReq(this.state)
    this.loginPostReq(this.state)

    // console.log('apiResponse =', resp)

    // // PROPS call here
  }

  loginGetReq(cS) {
    axios
      .get('http://localhost:3000/backend/login', {
        params: {
          username: cS.username,
          pass: cS.pass,
        },
      })
      .then((response) => {
        // API output data
        const apiResponse = response.data

        this.props.saveUp(apiResponse)

        // What you want to do with the API output data
        return apiResponse
      })
      .catch((error) => {
        console.log(error)
      })
  }

  loginPostReq(cS) {
    axios
      .post('http://localhost:3000/backend/login', {
        params: {
          username: cS.username,
          pass: cS.pass,
        },
      })
      .then((response) => {
        // API output data
        console.log('Post-Req response.data =', response.data)

        const u = response.data.username
        const p = response.data.pass
        const v = response.data.verified

        const apiResponse = { username: u, pass: p, verified: v }

        this.props.saveUp(apiResponse)
        // What you want to do with the API output data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleInputChange}
          />
          <br />

          <input
            type="password"
            placeholder="pass"
            name="pass"
            onChange={this.handleInputChange}
          />
          <br />

          <button type="submit">Login</button>
          <br />
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  saveUp: PropTypes.func,
}

export default LoginForm
