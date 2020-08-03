import React from 'react';

import './Home.css';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshUp() {
    this.setState(this.state);
  }

  render() {
    return (
      <div className="Home">
        <head>
        <title> Home </title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="Home.css" />
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
        </head>

        <Header />
        <Body />
        <Footer />

        {/* <footer className="w3-container w3-blue">
          <a className="fa fa-smile-o" href="https://ibm.com/">
            React
          </a>
        </footer> */}
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default Home;
