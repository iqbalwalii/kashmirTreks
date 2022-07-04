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
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image
              src="/assets/images/logo.svg"
              width={60}
              height={60}
              alt="logo"
            />
            <span style={{ color: "#5B3511", marginLeft: "1rem" }}>
              Kashmir
            </span>{" "}
            <span style={{ color: "#004220" }}>Ensueno</span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/treks">Treks</Nav.Link>

              <NavDropdown title="Holidays" id="collasible-nav-dropdown">
                {Object.keys(Holidays).map((key) => (
                  <NavDropdown.Item href={`/holidays/${key}`} key={key}>
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
