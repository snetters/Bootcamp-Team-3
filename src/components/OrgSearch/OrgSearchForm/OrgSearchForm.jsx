import React from 'react'
import PropTypes from 'prop-types'

import './OrgSearchForm.css'

import axios from 'axios'

class OrgSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orgName: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.timeGetReq = this.timeGetReq.bind(this);
    // this.formGetReq = this.formGetReq.bind(this);
    // this.formPostReq = this.formPostReq.bind(this);
  }

  handleInputChange(event) {
    console.log('org name change to: ', event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submitted form =', this.state)

    // API request
    // this.formGetReq(this.state)
    // this.formPostReq(this.state);

    // PROPS call here
    this.props.saveUp(this.state)
  }

  timeGetReq() {
    const config = {
      method: 'get',
      url: 'http://localhost:3000/backend/time',
      headers: {},
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  formGetReq(cS) {
    axios
      .get('http://localhost:3000/backend/formAPI', {
        params: {
          orgName: cS.orgName,
        },
      })
      .then(function (response) {
        // API output data
        console.log('Get-Req response.data =', response.data)
        // What you want to do with the API output data
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  formPostReq(cS) {
    axios
      .post('http://localhost:3000/backend/formAPI', {
        params: {
          orgName: cS.orgName,
        },
      })
      .then(function (response) {
        // API output data
        console.log('Post-Req response.data =', response.data)
        // What you want to do with the API output data
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  componentDidMount() {
    this.setState({ orgName: 'initFormOrgName' })
  }

  render() {
    return (
      <div className="OrgSearchForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="organization name"
            name="orgName"
            onChange={this.handleInputChange}
          />
          <br></br>

          <button type="submit">Search</button>
          <br></br>
        </form>
      </div>
    )
  }
}

export default OrgSearchForm

OrgSearchForm.propTypes = {
  saveUp: PropTypes.func,
}
