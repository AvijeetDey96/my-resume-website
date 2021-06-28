import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const pdf = 'https://drive.google.com/file/d/1xTngZfWOJYxPHdvmRrnkUmlqUQCP21_r/view?usp=sharing'

  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Get Résumé
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Ask-fast Pvt. Ltd - Frontend Developer  "
              date="October 2020 - Present"
              content={[
                "Developed the whole  web app  using ReactJS  & Redux for Cloudio. ",
                " Developed two out of six pages using React for a business management application for Qring.",
                " Single handedly led the development of the frontend development",
                "  Tech stack : HTML, CSS, ReactJs, Material UI, Redux, Redux Saga  "]}
            />
            <Resumecontent
              title="Xelpmoc Design and Tech Ltd - Software Engineer"
              date="August 2019 - October 2020"
              content={[
                "  Led the team of 3 developers and responsible for design and development of the frontend part of the application .",
                "● Implemented Lazy loading into the application that reduced the initial loading time and made it 40% faster on the browser .",
                "Using RxJS (Switchmap Operator),I prevented unnecessary apirequests to the search route and made the application 15% more efficient",
                " Designed responsive screens from wireframe and figma designs using HTML,CSS",
                "Implemented signature pad and barcode scanner that makes the application more user friendly.",
                "Tech stack : HTML, CSS, Angular 7,Observables(RxJs)"
              ]}
            />
            <Resumecontent
              title="Groveus Informatics Pvt. Ltd —UI & Mobile App Developer"
              date="FEBRUARY 2018 - FEBRUARY 2019"
              content={[
               " Developed student management android application called Edubios using Ionic that serves 10+ educational sectors like schools and colleges with 5000+ students .",
                " Responsible for ideation to deployemnt of the Android app."
              ]}
            />
             
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Pesto - Engineering Fellow"
              date="2020"
              content={["Pesto Remote Batch" ]}
            />
            <Resumecontent
              title="Computer Application(MCA)"
              date="2017 - 2019"
              content={["Siliguri Institute Of Technology(SIT)"]}
            />
            <Resumecontent
              title="Bachelor of science  in Computer Science(Honours) "
              date="2014  - 2017"
              content={["Siliguri College"]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                `Certified Blockchain Expert™`,
                `Issuing authority - Blockchain Council`,
                "Credential ID - 15503030",
                "Date of Certification - March 2020",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Get Résumé
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
