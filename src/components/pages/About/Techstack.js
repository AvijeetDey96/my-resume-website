import React from "react";
import { Col, Row, Badge } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
 
function Techstack() {
  const comfortable = ['React.js', 'JavaScript', 'React Bootstrap', 'React Router', 'Redux', 'React Native', 'Angular', 'AngularJs', 'Ionic3', 'NodeJs'];
  const familiar = ['GraphQl', 'Mongodb', 'sass', 'Aws', 'nextjs', 'jest', 'webpack'];
  const tools = ['VS Code', 'Chrome Dev Tool','Firebase','Netlify','Bit buckt','Notepad++'];
  return (
    <Row style={{ justifyContent: "center", padding: "50px 0 50px 0" }}>
      <Col xs={12} md={4} >
        <h4 className="tech-stack-heading">Comfortable</h4>
        <div style={{ paddingTop: '20px' }}>
          {
            comfortable.map((data,i) => (
              <span>
                <Badge key={i} className="tech-badge" >&nbsp; {data} &nbsp;</Badge> &nbsp;
              </span>
            )
            )}
        </div>
      </Col>
      <Col xs={12} md={4} >
        <h4 className="tech-stack-heading">Familiar</h4>
        <div style={{ paddingTop: '20px' }}>
          {
            familiar.map((data,i) => (
              <span>
                <Badge key={i} className="tech-badge" >&nbsp; {data} &nbsp;</Badge> &nbsp;
              </span>
            )
            )}
        </div>
      </Col>
      <Col xs={12} md={4}>
        <h4 className="tech-stack-heading">Tools</h4>
        <div style={{ paddingTop: '20px' }}>
          {
            tools.map((data) => (
              <span>
                <Badge className="tech-badge" >&nbsp; {data} &nbsp;</Badge> &nbsp;
              </span>
            )
            )}
        </div>
      </Col>

    </Row>
  );
}

export default Techstack;




/* <Col xs={4} md={2} className="tech-icons">
       <CgCPlusPlus />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiJavascript1 />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiNodejs />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiReact />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiMongodb />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiPython />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiPytorch />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiTensorflow />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <DiGit />
     </Col>
     <Col xs={4} md={2} className="tech-icons">
       <SiFirebase />
     </Col> */