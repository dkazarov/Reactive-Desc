import React from 'react';

import { nanoid } from 'nanoid';

import Table from 'react-bootstrap/Table';

const TableContacts = ({ data, setData, sortDirection, setSortDirection }) => {
  //Sort Columns
  const sortData = (field) => {
    setSortDirection((sortDirection = !sortDirection));

    const copyData = [...data].sort((a, b) => (a[field] > b[field] ? 1 : -1));

    if (!sortDirection) {
      setData(copyData.reverse());
    }

    return setData(copyData);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => sortData('id')}>id</th>
          <th onClick={() => sortData('firstName')}>First Name</th>
          <th onClick={() => sortData('lastName')}>Last Name</th>
          <th onClick={() => sortData('age')}>Age</th>
          <th onClick={() => sortData('email')}>Email</th>
          <th onClick={() => sortData('phone')}>Phone</th>
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
