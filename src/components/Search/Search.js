import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({
  data,
  searchValue,
  setSearchValue,
  setfilteredData,
  filteredData,
}) => {
  const search = (searchText) => {
    const filteredValue = data.filter((items) =>
      items.firstName.includes(searchText)
    );
    setfilteredData(filteredValue);
    setSearchValue('');
  };

  return (
    <>
      <div className="d-flex mt-3">
        <Form.Label htmlFor="inputPassword5">
          Знайдено {filteredData.length} співпадінь
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
