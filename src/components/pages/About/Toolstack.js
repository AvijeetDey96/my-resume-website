import React from "react";
import { Col, Row } from "react-bootstrap";
import react from '../../../Assets/languages/react.png';
import angular from '../../../Assets/languages/angular.png';
import aws from '../../../Assets/languages/aws-logo.png';
import bootstrap from '../../../Assets/languages/Bootstrap.png';
import css from '../../../Assets/languages/css.png';
import express from '../../../Assets/languages/express.png';
import github from '../../../Assets/languages/github.png';
import html from '../../../Assets/languages/html.png';
import ionic from '../../../Assets/languages/ionic.png';
import js from '../../../Assets/languages/javascript.png';
import material from '../../../Assets/languages/materialUI.png';
import mongo from '../../../Assets/languages/mongodb.png';
import node from '../../../Assets/languages/node.png';
import redux from '../../../Assets/languages/redux.png';
import ts from '../../../Assets/languages/typescript.svg';
import vs from '../../../Assets/languages/vscode.svg';
import graphql from '../../../Assets/languages/graphql.png';
import mysql from '../../../Assets/languages/mysql.png';
import Netlify from '../../../Assets/languages/netlify.png';
import chrome from '../../../Assets/languages/chrome.png';
import git from '../../../Assets/languages/git.png';
import jira from '../../../Assets/languages/jira.png';
import bitbucket from '../../../Assets/languages/bitbucket.png';
import trello from '../../../Assets/languages/trello.png';
import Tilt from "react-parallax-tilt";

function Toolstack() {
  const frontendLanguages = [
    {
      name: 'React js',
      logo: react,
    },
    {
      name: 'Angular',
      logo: angular,
    },
    {
      name: 'Ionic',
      logo: ionic,
    },
    {
      name: 'React Native',
      logo: react,
    },
    {
      name: 'Redux',
      logo: redux,
    },
    {
      name: 'Typescript',
      logo: ts,
    },
    {
      name: 'Javascript',
      logo: js,
    },
    {
      name: 'Material UI',
      logo: material,
    },
    {
      name: 'BootStrap',
      logo: bootstrap,
    },
    {
      name: 'Css',
      logo: css,
    },
    {
      name: 'HTML',
      logo: html,
    },

  ];
  const BackendLanguages = [
    {
      name: 'Node js',
      logo: node,
    },
    {
      name: 'Express js',
      logo: express,
    },
    {
      name: 'mongoDB',
      logo: mongo,
    },
    {
      name: 'GraphQl',
      logo: graphql,
    },
    {
      name: 'Mysql',
      logo: mysql,
    },
    {
      name: 'AWS',
      logo: aws,
    },
  ]
  const tools = [
    {
      name: 'Visual Studio Code',
      logo: vs,
    },
    {
      name: 'GIT',
      logo: git,
    },
    {
      name: 'Jira',
      logo: jira,
    },
    {
      name: 'Bit bucket',
      logo: bitbucket,
    },
    {
      name: 'Trello',
      logo: trello,
    },
    {
      name: 'Netlify',
      logo: Netlify,
    },
    {
      name: 'Github',
      logo: github,
    },
    {
      name: 'Chrome Dev Tools',
      logo: chrome,
    },
  ]
  return (
    <React.Fragment>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

        
      <div className="tech-stack-heading"> Front End languages </div>
        <br />
        <Col xs={12} md={12}>
         
          <Row>
            {frontendLanguages.map(({ logo, name }, index) => (
              <Col xs={4} md={2}>
                <div className="tech-logo-conatiner">
                  <Tilt>
                    <img alt="icon" className="tech-logos" key={index} src={logo} />
                    <p> <small> {name}</small></p>
                  </Tilt>
                </div>
              </ Col>
            ))
            }
          </Row>
        </Col>
        <div className="tech-stack-heading"> Back End languages </div>
        <br />
        <Col xs={12} md={12}>
        
          <Row>
            {BackendLanguages.map(({ logo, name }, index) => (
              <Col xs={4} md={2}>
                <div className="tech-logo-conatiner">
                  <Tilt>
                    <img alt="icon" className="tech-logos" key={index} src={logo} />
                    <p> <small> {name}</small></p>
                  </Tilt>
                </div>
              </ Col>
            ))
            }

          </Row>
        </Col>
        <div className="tech-stack-heading">Tools availabled</div>
        <br />
        <Col xs={12} md={12}>
          <Row>
            {tools.map(({ logo, name }, index) => (
              <Col xs={4} md={2}>
                <div className="tech-logo-conatiner">
                  <Tilt>
                    <img alt="icon" className="tech-logos" key={index} src={logo} />
                    <p> <small> {name}</small></p>
                  </Tilt>
                </div>
              </ Col>
            ))
            }

          </Row>
        </Col>
      </Row>
    </ React.Fragment>
  );
}

export default Toolstack;
