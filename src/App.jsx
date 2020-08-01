import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { StyleSheet } from 'react-native';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import OrgSearch from './components/OrgSearch/OrgSearch';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Rus from './components/Rus/Rus';

import NotFound from './components/NotFound/NotFound';

import './App.css';

import ReactScrollTable from 'react-scroll-table';

// ScrollTable: https://www.npmjs.com/package/react-scroll-table

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      loggedIn: false,
    };
    this.saveUp = this.saveUp.bind(this);
  }

  saveUp(state) {
    this.setState(state);
    console.log('saveUp ', this.state);
  }

  render() {
    return (
      // <ScrollView>
      // <h1 style={{textAlignVertical: "center", textAlign: "center" }}>
      // Transaction History
      // </h1>
      // <ReactScrollTable {...tableProps} />

      // </ScrollView>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/orgSearch" component={OrgSearch} />
            <Route
              path="/profile"
              render={() => (
                <Profile saveUp={this.saveUp} appState={this.state} />
              )}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/rus" component={Rus} />
            {/* <Route exactPath="/hez" component={Hez} /> */}
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 480,
    height: 180,
    marginBottom: 10,
  },
  title: {
    color: '#888',
    fontSize: 40,
    marginHorizontal: 15,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});

const noteFormatter = (data) => {
  return (
    <pre
      style={{
        margin: 0,
        whiteSpace: 'pre-line',
        fontFamily: 'Lato, sans-serif',
      }}
    >
      {data.text}
    </pre>
  );
};

const importantCellFormatter = (data) => {
  return data.favorite ? '*' : '';
};

const tableProps = {
  backgroundColor: '#0B76B2',
  borderColor: '#FF434D',
  columns: [
    {
      header: 'Processed',
      sortable: true,
      accessor: 'favorite',
      width: '10%',
      render: importantCellFormatter,
    },
    {
      header: 'User Name',
      accessor: 'username',
      width: '20%',
      sortable: true,
    },
    {
      header: 'Payment Type',
      sortable: true,
      accessor: 'text',
      width: '20%',
      render: noteFormatter,
    },
    {
      header: 'Date',
      sortable: true,
      accessor: 'date',
      width: '20%',
      sortFunction: function (a, b, order) {
        return order === 'asc'
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      },
    },
  ],
  data: [
    {
      favorite: false,
      username: '@BlueMovementNC',
      text: '$5167.90 via PayPal',
      date: new Date().toDateString(),
    },
    {
      favorite: true,
      username: '@BlueMovementMA',
      text: '$15107.50 via PayPal',
      date: new Date(2020, 10, 5).toDateString(),
    },
    {
      favorite: true,
      username: '@BlueMovementMA',
      text: '$15107.50 via PayPal',
      date: new Date(2020, 10, 5).toDateString(),
    },
    {
      favorite: false,
      username: '@BlueMovementSC',
      text: '$3167.00 via Venmo.',
      date: new Date(2020, 1, 17).toDateString(),
    },
    {
      favorite: true,
      username: '@BlueMovementDC',
      text: '$5500.00 via Venmo',
      date: new Date(2020, 2, 28).toDateString(),
    },
    {
      favorite: false,
      username: '@BlueMovementCA',
      text: '$25167.32 via PayPal.',
      date: new Date(2019, 6, 15).toDateString(),
    },
    {
      favorite: false,
      username: '@BlueMovementNY',
      text: '$7167.77 via PayPal',
      date: new Date(2020, 4, 7).toDateString(),
    },
    {
      favorite: true,
      username: '@BlueMovementMO',
      text: '$8167.00 via Venmo',
      date: new Date(2020, 6, 12).toDateString(),
    },
    {
      favorite: false,
      username: '@BlueMovementTX',
      text: '$13167.00 via PayPal',
      date: new Date(2020, 1, 27).toDateString(),
    },
  ],
  downIcon: <i className="fa fa-down" />,
  maxHeight: 300,
  noDataText: 'no data here',
  shaded: true,
  shadedColor: '#2AB2FF',
  textColor: '#ffffff',
  upIcon: <i className="fa fa-up" />,
};
