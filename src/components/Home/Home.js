import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Introduction from './Introduction'

function Home() {

  const image =
    <Col md={5} style={{ paddingBottom: 20 }}>
      {/* <img
        src={homeLogo}
        alt="home pic"
        className="img-fluid"
        style={{ maxHeight: "450px" }}
      /> */}
    </Col>

  return (
    <section>
      <Container className="home-section" id="home" fluid>
        <Particle />
        <Container className="home-content">
          <Row>
            <Introduction />
            {image}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
