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

  refreshUp() {
    this.setState(this.state);
  }

  render() {
    return (
      <div className="Dashboard">
        <header>
          <title> Dashboard </title>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" type="text/css" href="Home.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
            id="bootstrap-css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
          />
        </header>

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

          <Footer refreshUp={this.refreshUp.bind(this)} />

          {/* End page content */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default Dashboard;
