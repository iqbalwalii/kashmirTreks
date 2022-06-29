import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { Holidays } from "../Types/index";
const Navigation = () => {
  console.log(Holidays);
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
            Kashmir Ensueno
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/treks">Treks</Nav.Link>

              <NavDropdown title="Holidays" id="collasible-nav-dropdown">
                {/* {Holidays.map((holiday) => (
                  <NavDropdown.Item href="#action/3.1">
                    {holiday}
                  </NavDropdown.Item>
                ))} */}
                {Object.keys(Holidays).map((key) => (
                  <NavDropdown.Item href={`holidays/${key}`}>
                    {Holidays[key]}
                  </NavDropdown.Item>
                ))}
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
