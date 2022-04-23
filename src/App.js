import React, { useState, useEffect } from 'react';

import Loader from './components/Loader/Loader';
import TableContacts from './components/Table/TableContacts';
import PaginationPage from './components/Pagination/PaginationPage';
import Search from './components/Search/Search';

import axios from 'axios';

import './App.scss';

function App() {
  // All data
  const [data, setData] = useState([]);
  // Loader
  const [isLoading, setIsLoading] = useState(false);
  // Sort
  const [sortDirection, setSortDirection] = useState(false);
  // Pagination
  const [limitUsers] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const lastPage = activePage * limitUsers;
  const firstPage = lastPage - limitUsers;
  // Search
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setfilteredData] = useState(data);
  const filteredCount = filteredData.length;

  const _baseUrl = 'https://dummyjson.com/users?limit=100';

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(_baseUrl);
        setData(res.data.users);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        return <h1>e.message</h1>;
      }
    };

    getData();
  }, [limitUsers]);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search
            data={data}
            filteredData={filteredData}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setfilteredData={setfilteredData}
            filteredCount={filteredCount}
          />
          <TableContacts
            data={filteredData}
            setData={setData}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
            firstPage={firstPage}
            lastPage={lastPage}
          />
        </>
      )}
      <PaginationPage
        activePage={activePage}
        setActivePage={setActivePage}
        limitUsers={limitUsers}
        data={filteredData}
      />
    </div>
  );
}

export default App;
