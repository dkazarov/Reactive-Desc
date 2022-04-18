import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './Loader.scss';

const Loader = () => {
  return (
    <div className="spinner">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
