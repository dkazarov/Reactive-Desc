import React, { useState, useEffect } from 'react';

import TableContacts from './components/Table/TableContacts';
import Loader from './components/Loader/Loader';

import axios from 'axios';

import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _baseUrl = 'https://dummyjson.com/users?limit=100';

  useEffect(() => {
    axios.get(_baseUrl).then((response) => setData(response.data.users));
    setIsLoading(false);
  }, []);

  return (
    <div className="container">
      {isLoading ? <Loader /> : <TableContacts data={data} />}
    </div>
  );
}

export default App;
