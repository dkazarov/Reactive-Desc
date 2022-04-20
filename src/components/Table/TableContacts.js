import React from 'react';

import { nanoid } from 'nanoid';

import Table from 'react-bootstrap/Table';

const TableContacts = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody xs={6}>
        {data.map((items) => (
          <tr key={nanoid()}>
            <td>{items.id}</td>
            <td>{items.firstName}</td>
            <td>{items.lastName}</td>
            <td>{items.age}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableContacts;
