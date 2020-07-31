import React from 'react';

import Sidebar from './Sidebar/Sidebar';

import PageHeader from './Body/PageHeader/PageHeader';
import MainContainer from './Body/MainContainer/MainContainer';
// import MyTable from './Body/MyTable/MyTable';
import Badges from './Body/Badges/Badges';
// import Recommended from './Body/Recommended/Recommended';
import BottomBar from './Body/BottomBar/BottomBar';
import PageFooter from './Body/PageHeader/PageHeader';
import Footer from './Footer/Footer';

import './Dashboard.css';

//import Nav from './Nav/Nav'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Dashboard">
        {/* Sidebar/menu with Overlay effect, merged with Top for better comparmetalization*/}
        <Sidebar />

        {/*PAGE CONTENT! */}
        <div className="w3-main">
          {/* Header */}
          <PageHeader />

          {/* Containers for Messages, petitions shared, & my organizations */}
          <MainContainer />

          {/* Section with regional map and table of My Organizations */}
          {/* <MyTable /> The tables needs to be reformated */}

          {/* Section with the Badges*/}
          <Badges />

          {/* Section with Recommended Organizations */}
          {/* <Recommended /> The tables needs to be reformated */}

          {/* BottomBar */}
          <BottomBar />

          {/* Footer */}
          <PageFooter />

          <Footer />

          {/* End page content */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
