// Import necessary components from react-bootstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// Import custom ProjectCard component
import { ProjectCard } from "./ProjectCard";

// Import project images
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import stock1 from "../assets/img/stock1.jpg";
import pict1 from "../assets/img/Pict 1.jpeg";
import pict3 from "../assets/img/pict 3.jpeg";
import rakit2 from "../assets/img/Rakit 2.jpeg";
import pict2 from "../assets/img/Pict 2.jpeg";
import RoboticProgramming from "../assets/img/Robotic Programming.jpeg";
import todolistapp from "../assets/img/todolistapp.jpeg";

// Import background image for the section
import colorSharp2 from "../assets/img/colorsharp2.png";

// Import CSS animations
import 'animate.css';

// Import visibility detection component
import TrackVisibility from 'react-on-screen';

// Define and export Projects component
export const Projects = () => {

  // Array of project details
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
      description: "switching LEDs in Arduino",
      imgUrl: RoboticProgramming,
    },
    {
      title: "",
      description: "",
      imgUrl: stock1,
    },
  ];

  // Render Projects section
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* Track visibility to trigger animations */}
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my Projects, Certifications, Experiences</p>
                {/* Tab container for project categories */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* Tab nav */}
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
                        {/* Map through projects array and render ProjectCard for each */}
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {/* Apply a different layout for the second tab */}
                        <Col md={8} className="proj-imgbx-alt">
                          <div className="proj-imgbx-alt">
                            <img src={pict1} alt="robotik 1" />
                            <div className="proj-txtx-alt">
                              <h4>Community Service</h4>
                              <span>analog robotics extracurricular instructor, Klampis Ngasem 1 public elementary school .</span>
                            </div>
                          </div>
                          <div className="proj-explanation">
                            <p>In this community service, every friday for one year, I had the opportunity to teach analog robotics to primary school students at SDN klampis Ngasem 1,ranging from 4th grade to 6th grade. The aim was to engage students in hands-on learning and education to enhance the kids understanding of technology and problem-solving around robotics through theoritical explanations and practical applications </p>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-between align-items-center">
                      {/* Left */}
                        <Col md={4} className="proj-imgbx-alt2">
                          <div className="proj-imgbx-alt2">
                            <img src={pict3} alt="robotik 2" />
                          </div>
                        </Col>    
                      {/* Center */}
                        <Col md={4} className="proj-imgbx-alt2">
                          <div className="proj-imgbx-alt2">
                            <img src={rakit2} alt="robotik 2" />
                          </div>
                        </Col>
    
                      {/* Right */}
                        <Col md={4} className="proj-imgbx-alt2">
                          <div className="proj-imgbx-alt2">
                            <img src={pict2} alt="robotik 2" />
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {/* Add ProjectCard instances for the third tab */}
                        <ProjectCard
                          title="Intern at SHLV"
                          description="Details about my internship at SHLV."
                          imgUrl={stock1}
                        />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Background image for the right side */}
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
