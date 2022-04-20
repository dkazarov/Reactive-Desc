import React from 'react';

import { nanoid } from 'nanoid';

import Table from 'react-bootstrap/Table';

import { SortIconDown, SortIconUp } from './SortIcon/SortIcon';

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
          <th onClick={() => sortData('id')}>
            id
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
          <th onClick={() => sortData('firstName')}>
            First Name
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
          <th onClick={() => sortData('lastName')}>
            Last Name
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
          <th onClick={() => sortData('age')}>
            Age
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
          <th onClick={() => sortData('email')}>
            Email
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
          <th onClick={() => sortData('phone')}>
            Phone
            {sortDirection ? <SortIconDown /> : <SortIconUp cla />}
          </th>
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
