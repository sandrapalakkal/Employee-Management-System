import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-dark">
      <Container>
       <Link to = {'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand  style={{color:'white'}}>
          <i class="fa-regular fa-user"></i>
             Employee Management Portal
          </Navbar.Brand>
       </Link>
      </Container>
    </Navbar>
  )
}

export default Header