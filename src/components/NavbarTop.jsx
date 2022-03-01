import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarTop.css"

const NavbarTop = () => {
  return (
    <div>
      <Nav className="justify-content-center mt-3" sticky="top">
        <Nav.Item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>Genie's Beauty Supply</h2>
          </Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center" >
        <Nav.Item className="mx-1">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item className="mx-1">
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavbarTop;
