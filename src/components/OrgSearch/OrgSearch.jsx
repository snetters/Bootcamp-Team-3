import React from 'react';

import OrgSearchForm from './OrgSearchForm/OrgSearchForm';

import OrgVis from './OrgVis/OrgVis';

import './OrgSearch.css';

class OrgSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrgName: '',
    };
  }

  render() {
    return (
      <div className="OrgSearch">
        <title> OrgSearch </title>
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

        <p>Organization Search</p>

        <p>
          Organization name:
          {this.state.currentOrgName}
        </p>

        <OrgSearchForm
          saveUp={(s) => {
            console.log('parent saveUp response s =', s);
            this.setState({ currentOrgName: s.orgName });
          }}
        />

        <br />

        <OrgVis saveDown={this.state} />
      </div>
    );
  }
}

export default OrgSearch;
