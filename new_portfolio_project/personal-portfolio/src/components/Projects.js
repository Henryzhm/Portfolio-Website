import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/loveConnect.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  const businessProjects = [
    {
      title: "Psykitchen-Echo App",
      description: "Front-end development by using Swift",
      imgUrl: projImg1,
      url: "https://github.com/Psyckitchen/Echo_app"
    },
    {
      title: "Love Connect Website",
      description: "Dating website developed by WordPress",
      imgUrl: projImg2,
      url: "https://myloveconnect.com/"
    },
  ];

  const ownProjects = [
    {
      title: "Psykitchen-Echo App",
      description: "Front-end development by using Swift",
      imgUrl: projImg1,
      url: "https://example.com/psykitchen-echo-app"
    },
    {
      title: "Love Connect Website",
      description: "Dating website developed by WordPress",
      imgUrl: projImg2,
      url: "https://example.com/love-connect"
    },
  ];

  const courseProjects = [
    {
      title: "Psykitchen-Echo App",
      description: "Front-end development by using Swift",
      imgUrl: projImg1,
      url: "https://example.com/psykitchen-echo-app"
    },
    {
      title: "Love Connect Website",
      description: "Dating website developed by WordPress",
      imgUrl: projImg2,
      url: "https://example.com/love-connect"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Business Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Own Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Course Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          businessProjects.map((project, index) => {
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
                      <Row>
                        {
                          ownProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          courseProjects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
