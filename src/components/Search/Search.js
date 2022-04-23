import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({
  data,
  searchValue,
  setSearchValue,
  setfilteredData,
  filteredCount,
}) => {
  const search = (searchText) => {
    const filteredValue = data.filter((items) =>
      items.firstName.includes(searchText)
    );
    setfilteredData(filteredValue);
    console.log(filteredValue.length);
  };

  return (
    <>
      <div className="d-flex mt-3">
        <Form.Label htmlFor="inputPassword5">
          Знайдено {filteredCount} співпадінь
        </Form.Label>
      </div>
      <div>
        <Form.Control
          type="password"
          id="inputPassword5"
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
