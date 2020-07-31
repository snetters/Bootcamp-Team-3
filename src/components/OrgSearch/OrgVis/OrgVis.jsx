import React from 'react';

import './OrgVis.css';

class OrgVis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cOrgName: 'search for an organization above',
    };
  }

  static getDerivedStateFromProps(props) {
    const cON = props.saveDown.currentOrgName;
    console.log('saveDown orgName =', cON);
    return { cOrgName: cON };
  }

  render() {
    return (
      <div className="OrgVis">
        <p>
          Organization Search Result:
          {this.state.cOrgName}
        </p>
      </div>
    );
  }
}

export default OrgVis;
