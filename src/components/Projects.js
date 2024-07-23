// Import necessary components from react-bootstrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// Import custom ProjectCard component
import { ProjectCard } from "./ProjectCard";

// Import project images
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import stock1 from "../assets/img/stock1.jpg";

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
      description: "Ping-Pong game in C/C++",
      imgUrl: projImg2,
    },
    {
      title: "Coding",
      description: "Any other projects",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "",
      imgUrl: stock1,
    },
    {
      title: "",
      description: "",
      imgUrl: stock1,
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
                    {/* Tab navigation items */}
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>LKMM DLL.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Intern at SHLV</p>
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
