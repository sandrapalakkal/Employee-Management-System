import './App.css'
import Header from './components/Header'
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import View from './components/View';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />

      <div className="d-flex align-items-center">
        <h5 style={{ fontSize: '30px' }} className='text-center mt-5 ms-3'>Add New Employee</h5>
        <button onClick={handleShow} className='btn btn-info ms-3 mt-5 rounded-circle fw-bolder fs-5 text-center'>+</button>
      </div>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter the employee name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Email</Form.Label>
              <Form.Control type="email" placeholder="name@email.com" />
            </Form.Group>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Select the Employee Status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button className='btn btn-success'>Submit</Button>
          <Button className='btn btn-danger' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <View />
    </>
  )
}

export default App
