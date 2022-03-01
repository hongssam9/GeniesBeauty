import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div>
      <Nav className="justify-content-center mt-3"
      sticky = "top">
        <Nav.Item>
          <Nav.Link href="/src/components/Home.jsx"><h2>Genie's Beauty Supply</h2></Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center">
      <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav.Item>
        </Nav>
    </div>
  );
};

export default NavbarTop;
