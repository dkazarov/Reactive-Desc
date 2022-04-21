import React, { useState, useEffect } from 'react';

import Loader from './components/Loader/Loader';
import TableContacts from './components/Table/TableContacts';
import Pagination from './components/Pagination/Pagination';

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
  const [curentPage, setCurrentPage] = useState(1);
  const [paginationPageCount] = useState(15);
  const lastCurrentPageIndex = curentPage * paginationPageCount;
  const firstCurrentPageIndex = lastCurrentPageIndex - paginationPageCount;
  const currentPage = data.slice(firstCurrentPageIndex, lastCurrentPageIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <TableContacts
          data={currentPage}
          setData={setData}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
      )}
      {data && (
        <Pagination
          data={data.length}
          paginationPageCount={paginationPageCount}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          curentPage={curentPage}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default App;
