import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = () => {
  return (
    <div className="d-flex mt-5">
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Button variant="primary">Search</Button>{' '}
    </div>
  );
};

export default Search;
