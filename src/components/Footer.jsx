import React from "react";
import { Container, Navbar, Nav, Row, Col, Stack } from "react-bootstrap";
import "./Footer.css";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Navbar fixed="bottom" id="footer-container" className="my-2">

        <Stack gap={3} >
          <div className="footer-stuff">
            <Stack direction="horizontal" gap={5} >
              <div className="acp"><Link to="/About" style={{textDecoration:"none"}}>About</Link></div>
              <div className="acp"><Link to ="/Contact" style={{textDecoration:"none"}}>Contact</Link></div>
              <div className="acp"><Link to ="/Policy" style={{textDecoration:"none"}}>Policy</Link></div>
            </Stack>
          </div>
          <div className="footer-stuff"  id="copyright">
            <p>
              &copy; Copyright {new Date().getFullYear()} Genie's Beauty Supply
              | Created by TheNonChalantDduck <br />
             
            </p>
          </div>
        </Stack>

      </Navbar>
    </div>
  );
};

export default Footer;
