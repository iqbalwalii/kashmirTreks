"use client";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import { Holidays } from "../Types/index";
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
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image
              src="/assets/images/logo.png"
              width={60}
              height={60}
              alt="logo"
            />
            <span style={{
              color: "#C86B0C",
              marginLeft: "0.75rem",
              fontFamily: "'Caveat', cursive",
              fontWeight: 700,
              fontSize: "1.75rem",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}>
              Mount Eco
            </span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/treks">Treks</Nav.Link>

              <NavDropdown title="Holidays" id="collasible-nav-dropdown">
                {Object.keys(Holidays).map((key) => (
                  <NavDropdown.Item key={key} as={Link} href={`/holidays/${key}`}>
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
