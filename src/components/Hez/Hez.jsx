import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ReactScrollTable from 'react-scroll-table';

// ScrollTable: https://www.npmjs.com/package/react-scroll-table

export default function Hez() {
  return (
    <ScrollView>
      <h1 style={{ textAlignVertical: 'center', textAlign: 'center' }}>
        Transaction History
      </h1>
      <ReactScrollTable {...tableProps} />
    </ScrollView>
  );
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
