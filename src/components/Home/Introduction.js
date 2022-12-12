
import { Container, Row, Col } from "react-bootstrap";

import Type from "./Type";
const Introduction = () => {
    return (
        <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h1>

            <h1 className="heading-name">
                I'M
                <strong className="main-name"> JOÃO GADELHA</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
            </div>
        </Col>
    )
}

export default Introduction