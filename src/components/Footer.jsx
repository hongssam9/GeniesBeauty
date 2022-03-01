import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Navbar fixed="bottom" id="footer-container" className="py-5">
        <Container id="footer-stuff">
          <h4>About</h4>
          <h4>Contact</h4>
          <h4>Policy</h4>
        </Container>
      
        <Container>
        <p className="copyright">
            &copy; Copyright {new Date().getFullYear()} Genie's Beauty Supply |
            Created by TheNonChalantDduck <br />
            Github:
          </p>
          </Container>
          <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
      </Navbar>
      
    </div>
  );
};

export default Footer;
