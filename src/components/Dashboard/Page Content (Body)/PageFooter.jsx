import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './PageFooter.css'

class PageFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
        <footer class="w3-container w3-padding-16 w3-light-grey">
            <h4>FundFlow</h4>
            <p>Powered by <a href="#" target="_blank">React</a></p>
        </footer>
    )
  }
}

export default PageFooter