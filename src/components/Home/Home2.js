import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SocialIconBig from './SocialIconBig'
import AboutMe from './AboutMe'

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <AboutMe />
          <Row>

          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <SocialIconBig href="https://github.com/soumyajit4419" icon={<AiFillGithub />} />
                <SocialIconBig href="https://twitter.com/Soumyajit4419" icon={<AiOutlineTwitter />} />
                <SocialIconBig href="https://www.linkedin.com/in/soumyajit4419/" icon={<FaLinkedinIn />} />
                <SocialIconBig href="https://www.instagram.com/soumyajit4419" icon={<AiFillInstagram />} />
              </ul>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
