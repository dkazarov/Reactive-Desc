import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({
  data,
  searchValue,
  setSearchValue,
  setfilteredData,
  filteredData,
}) => {
  const [onClickSearch, setOnClickSearch] = useState(true);

  const search = (searchText) => {
    if (!searchText) {
      setfilteredData(data);
      setOnClickSearch(true);
      return
    }

    const filteredValue = data.filter((items) =>
      items.firstName.includes(searchText)
    );
    setfilteredData(filteredValue);
    setSearchValue('');
    setOnClickSearch(false);
  };

  return (
    <>
      <div className="d-flex mt-3">
        <Form.Label htmlFor="inputPassword5">
          {onClickSearch
            ? 'Знайдено 0 співпадінь'
            : 'Знайдено ' + filteredData.length + ' співпадінь'}
        </Form.Label>
      </div>
      <div className="d-flex">
        <Form.Control
          type="text"
          aria-describedby="passwordHelpBlock"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button variant="primary" onClick={() => search(searchValue)}>
          Search
        </Button>
      </div>
    </>
  );
};

export default Search;
