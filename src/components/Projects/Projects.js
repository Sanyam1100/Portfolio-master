import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Beat-Flow"
              description="This is an Audio Streaming website made with HTML, Css tailwind, javascript and reactJS with Latest backend technologies like Mongodb, NodeJs etc. this webapp have huge Music Library and amazing UI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WEATHER PREDICTION"
              description="Developed a weather prediction website aimed at providing accurate information to users. Technology Used Languages/Database- HTML, CSS, JavaScript, React JS"
              ghLink="https://github.com/Sanyam1100/Weathernow"
              demoLink="https://weathernow-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CAMPUS CONNECT"
              description="Developed an automated web-based Placement Management System for efficient student data handling and placement processes made with using technology HTML, CSS, JavaScript, React.JS, Node.JS, Express.JS, MongoDB Environment: Windows"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
