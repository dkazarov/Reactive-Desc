import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { SortIconDown, SortIconUp } from './SortIcon/SortIcon';

const TableContacts = ({ data, setData, sortDirection, setSortDirection }) => {
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
    console.log(field);
  };

  function MyVerticallyCenteredModal(props) {
    console.log(props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Користувач: {props.userinfo.firstName} {props.userinfo.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>
            Ім'я: {props.userinfo.firstName} {props.userinfo.lastName}
          </h2>
          <h5>
            <address>
              Країна: {props.userinfo.address.state}, Місто:{' '}
              {props.userinfo.address.city}, Адреса:{' '}
              {props.userinfo.address.address}
            </address>
            <hr />
              <h4>Вік: {props.userinfo.age} ріків</h4>
          </h5>

          <h5>Єлектронна пошта: {props.userinfo.email}</h5>
          <h5>Телефон: {props.userinfo.phone}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
        {data.map((items) => (
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
