import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img7.png";
import projImg6 from "../assets/img/project-img6.png";
import image8 from '../assets/img/project-img8.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
   
    {
      title: "Boat clone website",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://anugrahsivadasan.github.io/boat-clone-website/",
    },
    {
      title: "Bucket listy blog",
      description: "Travvel website clone",
      imgUrl: projImg3,
      link:" https://anugrahsivadasan.github.io/travelsite_anugrah/",
    },
    {
      title: "FANTA ",
      description: "GSAP website",
      imgUrl: projImg4,
      link:" https://anugrahsivadasan.github.io/anugrah-fanta/",

    },
    {
      title: "Play Store colne",
      description: "Design & Development",
      imgUrl: image8,
      link:"https://anugrahsivadasan.github.io/Google-playstore-clone/",

    },
    
    {
      title: "Headset clone",
      description: "Design & Development",
      imgUrl: projImg6,
      link:"https://anugrahsivadasan.github.io/headset-Site-/#",

    },
    {
      title: "Parallax website",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://anugrahsivadasan.github.io/parallax/",
    },
    
   
  ];
  const moreProjects = [
    {
      title: "Calculator",
      description: "Calculator clone using javascript",
      imgUrl: projImg5,
      link:" ",

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
                <p> <br></br> A few front-end projects I’ve built to sharpen my skills and explore creative design: 

Boat Clone Website – A product showcase website inspired by Boat, featuring categories like earbuds, watches, and speakers using HTML, CSS, and Bootstrap.<br></br>

Travel Website Clone – A responsive and visually rich travel site highlighting destinations and booking options.<br></br>

Fantra Drink Website – A modern animated landing page for a fictional energy drink, built using HTML, CSS, JavaScript, and GSAP.<br></br>

Google Play Store Clone – A static front-end replica of the Play Store interface using only HTML and CSS.<br></br>

Headset Website – A stylish single-product website showcasing a headset with clean UI and product highlights.<br></br>

Parallax Website – A smooth-scrolling parallax effect website built for creative visual presentation using HTML and CSS..<br></br></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Row>
                          {moreProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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

