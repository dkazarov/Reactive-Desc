import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const AddUser = () => {
  const [openForm, setOpenForm] = useState(true);

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="danger">Add User</Button>
      </div>
      <div className="d-flex justify-content-center">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Enter your Phone" />
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="d-block mx-auto mb-3"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
