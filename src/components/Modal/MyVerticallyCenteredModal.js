import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
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
        <hr />
        <h6>Вік: {props.userinfo.age} ріків</h6>
        <h3>Телефон: {props.userinfo.phone}</h3>
        <h4>Єлектронна пошта: {props.userinfo.email}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
