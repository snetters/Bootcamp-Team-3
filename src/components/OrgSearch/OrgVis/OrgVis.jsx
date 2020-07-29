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
    const { state } = this.state;
    return (
      <div className="OrgVis">
        <p>
          Organization Search Result:
          {state.cOrgName}
        </p>
      </div>
    );
  }
}

export default OrgVis;
