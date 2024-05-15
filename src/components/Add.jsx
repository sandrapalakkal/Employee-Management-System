import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, FloatingLabel } from 'react-bootstrap'


const Add = () => {
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Add New Employee</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!</p>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" label="Video Caption" className="mb-3" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgURL: e.target.value })} type="text" placeholder="Image URL" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputURL" label="YouTube URL" className="mb-3">
              <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
            </FloatingLabel>
            {
              invalidYoutubeURL && <div className='text-danger fw-bolder'>Invalid YouTube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add