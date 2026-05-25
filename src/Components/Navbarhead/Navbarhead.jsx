import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaShieldAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbarhead = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => setExpanded(false);

  return (
    <Navbar className="navbarhead" expand="lg" sticky="top" expanded={expanded}
           onToggle={(isExpanded) => setExpanded(isExpanded)}>
      <Container>
     
        <Navbar.Brand as={Link} to="/"className="logo-brand"  onClick={handleLinkClick} >
        <FaShieldAlt className="logo-icon" />
          Safe <span>Travel</span>
        </Navbar.Brand>

        <Navbar.Toggle className="custom-toggler" />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/"
              className={`nav-custom-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/survey"
              className={`nav-custom-link ${location.pathname === '/survey' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Registration
            </Nav.Link>

            <Nav.Link as={Link} to="/payment"
              className={`nav-custom-link ${location.pathname === '/payment' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Payment
            </Nav.Link>

            <Nav.Link as={Link} to="/faqs"
              className={`nav-custom-link ${location.pathname === '/faqs' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              FAQs
            </Nav.Link>

            <Nav.Link as={Link} to="/Contact"
              className="nav-contact-btn"
              onClick={handleLinkClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarhead;
