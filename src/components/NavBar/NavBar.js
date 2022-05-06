import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../public/logo.png'
import './Navbar.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" expand="md" variant='dark'>
      <Container fluid>
        <Navbar.Brand><img src={Logo} width="60" height="60" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink exact to="/" className="Links">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/favs" className="Links">Favoritas</NavLink></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header className="navbar">
    //   <div>
    //     <img id="logoHenry" src={Logo} width="70" height="70" className="d-inline-block align-top" alt="" />
    //   </div>
    //   <nav>
    //     <ul className="list">
    //       <li className="list-item">
    //         <NavLink exact to="/" >Home</NavLink>
    //         <NavLink to="/favs" >Favoritas</NavLink>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}