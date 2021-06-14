import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../common/Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../../Assets/about.png";
import Toolstack from "./Toolstack";
import {MeditateAnimation} from '../../../lotties/Lotties';
import Tilt from "react-parallax-tilt";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div className="developer-animation" >

               <Tilt> <MeditateAnimation /></Tilt>
            </div>
           
            
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
