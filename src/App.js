import React, { useState, useEffect } from 'react';

import TableContacts from './components/Table/TableContacts';
import Loader from './components/Loader/Loader';

import axios from 'axios';

import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _baseUrl =
    'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  useEffect(() => {
    axios.get(_baseUrl).then((response) => setData(response.data));
    setIsLoading(true);
  }, []);

  return (
    <div className="container">
      {isLoading ? <Loader /> : <TableContacts data={data} />}
    </div>
  );
}

export default App;
