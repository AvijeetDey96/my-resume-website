import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from '../Projects/Projects.js'
import About from '../About/About'
import Resume from '../Resume/Resume.js'
import { DeveloperAnimation } from '../../../lotties/Lotties';
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
 const pdf = 'https://drive.google.com/file/d/1YJaSfLUf3xMimFHQPDIc-EYQNjZwN7Sx/view?usp=sharing'
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7}  xs={12}  className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong  > &nbsp;AVIJEET DEY</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }} className="main-name">
                <Type />
                <br />
                <br />
                <br />
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload /> 
                  &nbsp;Get Résumé
                </Button>
                </div>
               
             
             
            </Col>

            <Col md={5} xs={12}  sm={12} style={{ paddingBottom: 20 }}>
        <div className="developer-animation" >
        <Tilt><DeveloperAnimation /></Tilt>
        </div>
              

            </Col>
          </Row>
          
                
        </Container>

      </Container>
     
      {/* <Home2 /> */}
      <About />
      <Projects />
      <Resume />
    </section>
  );
}

export default Home;
