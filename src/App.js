import React, { useState, useEffect } from 'react';

import TableContacts from './components/Table/TableContacts';

import axios from 'axios';

import './App.scss';

function App() {
  const [data, setData] = useState([]);

  const _baseUrl =
    'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  useEffect(() => {
    axios.get(_baseUrl).then((response) => setData(response.data));
  }, []);

  return (
    <div className="container">
      <TableContacts data={data} />
    </div>
  );
}

export default App;
