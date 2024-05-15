import React from 'react'
import Table from 'react-bootstrap/Table';

const View = () => {
  return (
    <>
     <Table className='mt-5' striped="columns" bordered hover>
      <thead className='text-center'>
        <tr >
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Email</th>
          <th>Employee Status</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default View