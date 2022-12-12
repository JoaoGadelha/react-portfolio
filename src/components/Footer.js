import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import SocialButton from './Home/SocialButton'
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Developed by João Gadelha</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <SocialButton href='https://github.com/soumyajit4419' icon={<AiFillGithub />} />
            <SocialButton href='https://twitter.com/Soumyajit4419' icon={<AiOutlineTwitter />} />
            <SocialButton href='https://www.linkedin.com/in/soumyajit4419/' icon={<FaLinkedinIn />} />
            <SocialButton href='https://www.instagram.com/soumyajit4419' icon={<AiFillInstagram />} />
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
