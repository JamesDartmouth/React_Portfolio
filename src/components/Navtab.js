import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavTab({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar.Brand className ="navtitle" href="#about">James's Portfolio</Navbar.Brand>
      <Nav className="nav me-auto justify-content-end">
        <Nav.Link href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          About
        </Nav.Link>
        <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Nav.Link>
        <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Nav.Link>
        <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Nav.Link>
      </Nav>
    </>
  );
}

export default NavTab;
