import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const AddUser = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(1);
  };

  const openForm = () => {
    setIsFormOpen((isFormOpen) => !isFormOpen);
  };

  return (
    <div>
      <div className='d-flex justify-content-center mb-3'>
        <Button variant='danger' onClick={openForm}>
          Add User
        </Button>
      </div>
      {isFormOpen ? (
        <div className='d-flex justify-content-center'>
          <Form onSubmit={submitHandler}>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridText'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridText'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formGridAge'>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter your age'
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridText'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter your Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Button
              variant='primary'
              type='submit'
              className='d-block mx-auto mb-3'
            >
              Submit
            </Button>
          </Form>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AddUser;
