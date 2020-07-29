import React from 'react'

import OrgSearchForm from './OrgSearchForm/OrgSearchForm'

import OrgVis from './OrgVis/OrgVis'

import './OrgSearch.css'

class OrgSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentOrgName: '',
    }
  }

  render() {
    return (
      <div className="OrgSearch">
        <p>Organization Search</p>

        <p>
          Organization name:
          {this.state.currentOrgName}
        </p>

        <OrgSearchForm
          saveUp={(s) => {
            console.log('parent saveUp response s =', s)
            this.setState({ currentOrgName: s.orgName })
          }}
        />

        <br />

        <OrgVis saveDown={this.state} />
      </div>
    )
  }
}

export default OrgSearch
