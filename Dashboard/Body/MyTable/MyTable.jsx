import React from 'react';

import './MyTable.css';

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w3-panel">
        <div className="w3-row-padding">
          <div className="w3-third">
            <h5>
              <b>Regions</b>
            </h5>
            <p>Here's where you've donated</p>
            <img
              src="https://23i69d6p0gw1zwz4y3smspc1-wpengine.netdna-ssl.com/wp-content/uploads/sites/25/cnt-import/sew/IMG/671/260671/google-analytics-usa-map.jpg"
              className="im1"
              alt="Google USA Regional Map"
            ></img>
          </div>
          <div className="w3-twothird">
            <h5>
              <b>My Organizations</b>
            </h5>
            <p>Here are the organizations you've donated to:</p>
            <table className="w3-table w3-striped w3-white w3-hoverable">
              <tr>
                <th>Organization Type</th>
                <th>Organization Name</th>
                <th>Times Donated</th>
                <th>Location</th>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-child w3-text-blue w3-large"></i>
                </td>
                <td>Organization A</td>
                <td className="w3-center">10</td>
                <td>
                  <i>California</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-balance-scale w3-text-red w3-large"></i>
                </td>
                <td>Organization B</td>
                <td className="w3-center">8</td>
                <td>
                  <i>Georgia</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-paw w3-text-yellow w3-large"></i>
                </td>
                <td>Organization C</td>
                <td className="w3-center">7</td>
                <td>
                  <i>Florida</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-hospital-o w3-text-blue w3-large"></i>
                </td>
                <td>Organization D</td>
                <td className="w3-center">5</td>
                <td>
                  <i>Texas</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-blind w3-text-green w3-large"></i>
                </td>
                <td>Organizaton E</td>
                <td className="w3-center">3</td>
                <td>
                  <i>New York</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-balance-scale w3-text-red w3-large"></i>
                </td>
                <td>Organization F</td>
                <td className="w3-center">1</td>
                <td>
                  <i>California</i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-handshake-o w3-text-green w3-large"></i>
                </td>
                <td>Organization G</td>
                <td className="w3-center">1</td>
                <td>
                  <i>Texas</i>
                </td>
              </tr>
            </table>
            <br />
            {/* Add function to make a clickable button*/}
            <button className="w3-button w3-dark-grey">
              Show More <i className="fa fa-arrow-down" />
            </button>
          </div>
        </div>
      </div>
      /*<hr />*/
    );
  }
}

export default MyTable;
