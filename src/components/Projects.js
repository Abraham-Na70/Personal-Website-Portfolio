import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import stock1 from "../assets/img/stock1.jpg";
import pict1 from "../assets/img/Pict 1.jpeg";
import pict3 from "../assets/img/pict 3.jpeg";
import rakit2 from "../assets/img/Rakit 2.jpeg";
import rakit1 from "../assets/img/Rakit 1.jpeg"
import pict2 from "../assets/img/Pict 2.jpeg";
import RoboticProgramming from "../assets/img/Robotic Programming.jpeg";
import todolistapp from "../assets/img/todolistapp.jpeg";
import SHLV from "../assets/img/Pasted image.png";
import CommServe from "../assets/img/CommServe.jpeg"
import colorSharp2 from "../assets/img/colorsharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Simple Web",
      description: "Simple Personal Web",
      imgUrl: projImg1,
    },
    {
      title: "Game Development",
      description: "Ping-Pong game in C",
      imgUrl: projImg2,
    },
    {
      title: "OOP",
      description: "Object-Oriented Programming",
      imgUrl: projImg3,
    },
    {
      title: "To-do list app",
      description: "Utility Program",
      imgUrl: todolistapp,
    },
    {
      title: "Robotic Programming",
      description: "Switching LEDs in Arduino",
      imgUrl: RoboticProgramming,
    },
    {
      title: "",
      description: "",
      imgUrl: rakit1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of my Projects, Certifications, Experiences</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experiences</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          <Col md={8} className="proj-imgbx-alt">
                            <div className="proj-imgbx-alt">
                              <img src={pict1} alt="robotik 1" />
                              <div className="proj-txtx-alt">
                                <h4>Community Service</h4>
                                <span>Analog robotics extracurricular instructor, Klampis Ngasem 1 public elementary school.</span>
                              </div>
                            </div>
                            <div className="proj-explanation">
                              <p>In this community service, every Friday for one year, I taught analog robotics to primary school students, engaging them in hands-on learning and education to enhance their understanding of technology and problem-solving through theoretical explanations and practical applications.</p>
                            </div>
                          </Col>
                        </Row>
                        <Row className="justify-content-between align-items-center">
                          <Col md={4} className="proj-imgbx-alt2">
                            <div className="proj-imgbx-alt2">
                              <img src={pict3} alt="robotik 2" />
                            </div>
                          </Col>
                          <Col md={4} className="proj-imgbx-alt2">
                            <div className="proj-imgbx-alt2">
                              <img src={rakit2} alt="robotik 2" />
                            </div>
                          </Col>
                          <Col md={4} className="proj-imgbx-alt2">
                            <div className="proj-imgbx-alt2">
                              <img src={pict2} alt="robotik 2" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <Col md={4} className="proj-imgbx-alt3">
                            <div className="proj-imgbx-alt3">
                              <img src={SHLV} alt="SHLV Internship Certificate" />
                              <div className="proj-txtx-alt3">
                                <h4>Intern at SHLV</h4>
                                <p>Certificate for 2 weeks of internship in the Information Communication and Technology department at Siloam Hospital Lippo Village </p>
                              </div>
                            </div>
                          </Col>
                          <Col md={4} className="proj-imgbx-alt3">
                            <div className="proj-imgbx-alt3">
                              <img src={CommServe} alt="Robotics Teacher Certificate" />
                              <div className="proj-txtx-alt3">
                                <h4>Robotics Teacher</h4>
                                <p>Certificate for the first 2 months with the following subjects : Introduction to Robotics and Analog Robotics, Components, Assembling Analog Robot </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
