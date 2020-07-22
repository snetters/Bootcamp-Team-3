import React from 'react';
import PropTypes from 'prop-types';

import './CreateAccountForm.css';

import axios from 'axios';

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      pass: '',
      passConf: '',
      verified: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAccountGetReq = this.createAccountGetReq.bind(this);
    this.createAccountPostReq = this.createAccountPostReq.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: 'initEmail',
      username: 'initUsername',
      pass: 'initPass',
      passConf: 'initPassConf',
    });
  }

  handleInputChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted form =', this.state);

    // API request
    this.createAccountGetReq(this.state);
    this.createAccountPostReq(this.state);

    // console.log('apiResponse =', resp)

    // // PROPS call here
  }

  createAccountGetReq(cS) {
    axios
      .get('http://localhost:3000/backend/createAccount', {
        params: {
          email: cS.email,
          username: cS.username,
          pass: cS.pass,
          passConf: cS.passConf,
        },
      })
      .then((response) => {
        // API output data
        console.log('Post-Req response.data =', response.data);

        const apiResponse = response.data;

        console.log('Get-Req response.data =', apiResponse);
        const { props } = this.props;
        props.saveUp(apiResponse);
        // What you want to do with the API output data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createAccountPostReq(cS) {
    axios
      .post('http://localhost:3000/backend/createAccount', {
        params: {
          email: cS.email,
          username: cS.username,
          pass: cS.pass,
          passConf: cS.passConf,
        },
      })
      .then((response) => {
        // API output data
        console.log('Post-Req response.data =', response.data);

        const e = response.data.email;
        const u = response.data.username;
        const p = response.data.pass;
        const v = response.data.verified;

        const apiResponse = {
          email: e,
          username: u,
          pass: p,
          verified: v,
        };
        const { props } = this.props;
        props.saveUp(apiResponse);
        // What you want to do with the API output data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="CreateAccountForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <br />

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

          <input
            type="password"
            placeholder="confirm pass"
            name="passConf"
            onChange={this.handleInputChange}
          />
          <br />

          <button type="submit">Create Account</button>
          <br />
        </form>
      </div>
    );
  }
}

CreateAccountForm.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
};

CreateAccountForm.defaultProps = {
  props: {
    appState: {
      email: 'example@email.com',
      username: 'username',
      pass: 'Password',
      passConf: 'Password',
      verified: false,
    },
  },
};

export default CreateAccountForm;
