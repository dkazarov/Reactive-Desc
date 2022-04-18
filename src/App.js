import React, { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

import './App.scss';

const _baseUrl =
  'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(_baseUrl).then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr>
              <td>{nanoid(5)}</td>
              <td>{items.firstName}</td>
              <td>{items.lastName}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
