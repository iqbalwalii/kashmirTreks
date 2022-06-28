import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image src="/assets/images/logo.png" width={60} height={60} />
            Kashmir Ensuno
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/treks">Treks</Nav.Link>

              <NavDropdown title="Holidays" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Srinagar Leh Nubra Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Kashmir Paradise Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kashmir Winter Package Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Srinagar Kargil Zanskar Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gulmarg Family Ski Holiday
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Gure Valley Cycling Trail
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Kashmir Spring Special Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Kashmir Car Rental
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/bespoke">Bespoke</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
