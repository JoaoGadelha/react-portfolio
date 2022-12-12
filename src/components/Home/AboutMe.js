
import { Container, Row, Col } from "react-bootstrap";
const AboutMe = () => {
    return (
        <Col className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Hello, my name is João Ricardo T. Gadelha. I am a <b className="blue">Fullstack Web Developer</b>.
                <br /><br />
                I'm a <b className="blue">Computer Engineer</b> graduated at the Federal University of Rio Grande do Norte, Brazil.
                <br /><br />
                I've started my coding journey with learning the bread and butter of Frontend development, a.k.a <b className="blue">HTML, CSS and Javascript</b> by watching free Youtube tutorials and Traversy Media's Udemy videos.
                <br /> <br />
                Since then I've dedicated myself in developing my frontend and backend skills, mainly developing projects in <b className="blue">React and React Native</b> using <b className="blue">Firebase</b> and <b className="blue">Node.js/Express.js</b> for <b className="blue">User Authentication</b> and <b className="blue">Backend APIs Development</b>.
                <br /><br />
                I am fluent in classics like
                <i>
                    <b className="blue">  Javascript, React, React Native and the MERN stack. </b>
                </i>
                <br /><br />
                Until this moment I've worked in two companies developing React Native apps:
            </p >

        </Col >
    )
}

export default AboutMe