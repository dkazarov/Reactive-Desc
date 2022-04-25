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
  const [onClickSearchTrigger, setOnClickSearchTrigger] = useState(false);

  const search = (searchText) => {
    if (!searchText) {
      setfilteredData(data);
      setOnClickSearchTrigger(false);
      return;
    }

    const filteredValue = data.filter((items) =>
      items.firstName.includes(searchText)
    );
    setfilteredData(filteredValue);
    setSearchValue('');
    setOnClickSearchTrigger(true);
  };

  return (
    <>
      <div className="d-flex mt-3">
        <Form.Label htmlFor="inputPassword5">
          {onClickSearchTrigger
            ? 'Знайдено ' + filteredData.length + ' співпадінь'
            : 'Знайдено 0 співпадінь'}
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
