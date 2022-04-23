import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import Table from 'react-bootstrap/Table';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';

import { SortIconDown, SortIconUp } from './SortIcon/SortIcon';

const TableContacts = ({
  data,
  setData,
  sortDirection,
  setSortDirection,
  firstPage,
  lastPage,
}) => {
  const [fieldData, setFieldData] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [userInfo, setUserInfo] = useState('');
  //Sort Columns
  const sortData = (field) => {
    // Sort Data
    setSortDirection((sortDirection = !sortDirection));
    const copyData = [...data].sort((a, b) => (a[field] > b[field] ? 1 : -1));
    if (!sortDirection) {
      setData(copyData.reverse());
    }

    return setData(copyData);
  };

  // Function component
  const ArrowSort = () => {
    return sortDirection ? <SortIconDown /> : <SortIconUp />;
  };

  const sortArrowDirection = (field) => {
    sortData(field);
    setFieldData(field);
  };

  const detailModal = (items) => {
    setModalShow(true);
    setUserInfo(items);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => sortArrowDirection('id')}>
            id
            {fieldData === 'id' ? <ArrowSort /> : null}
          </th>
          <th onClick={() => sortArrowDirection('firstName')}>
            First Name
            {fieldData === 'firstName' ? <ArrowSort /> : null}
          </th>
          <th onClick={() => sortArrowDirection('lastName')}>
            Last Name
            {fieldData === 'lastName' ? <ArrowSort /> : null}
          </th>
          <th onClick={() => sortArrowDirection('age')}>
            Age
            {fieldData === 'age' ? <ArrowSort /> : null}
          </th>
          <th onClick={() => sortArrowDirection('email')}>
            Email
            {fieldData === 'email' ? <ArrowSort /> : null}
          </th>
          <th onClick={() => sortArrowDirection('phone')}>
            Phone
            {fieldData === 'phone' ? <ArrowSort /> : null}
          </th>
        </tr>
      </thead>
      <tbody xs={6}>
        {data.slice(firstPage, lastPage).map((items) => (
          <tr key={nanoid()} onClick={() => detailModal(items)}>
            <td>{items.id}</td>
            <td>{items.firstName}</td>
            <td>{items.lastName}</td>
            <td>{items.age}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
          </tr>
        ))}
      </tbody>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userinfo={userInfo}
      />
    </Table>
  );
};

export default TableContacts;
