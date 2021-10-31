import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>
      <img
        src="https://i.ibb.co/vmpND5x/white-logo.png"
        width="180"
        height="120"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto mx-auto">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/addService">AddService</Nav.Link>
      <Nav.Link as={Link} to="/manageServices">ManageServices</Nav.Link>
      {user.email ?
        <Button onClick={logOut} className="btn-dark">Log Out </Button>
        :
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
     
      }
      {
       user.email && <Navbar.Text>Signed in as <a href="#login">{user.displayName}</a></Navbar.Text>
      }
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;