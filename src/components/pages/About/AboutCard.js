import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          A self-motivated and enthusiastic web developer with a deep interest in 
          <span className="purple"> JavaScript</span>. To work in the Software industry with modern web technologies
           of different local & multinational Software/ IT agencies of India 
           and grow rapidly with increasing responsibilities.
           <br/><br/>
           Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and researching about India's freedom movements
            </li>
          </ul>

          <p  style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Let the mind cheerful but calm!"{" "}
          </p>
          <footer className="blockquote-footer ">Swami Vivekananda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
