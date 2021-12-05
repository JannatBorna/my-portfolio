import React from 'react';
import Particles from "react-tsparticles";
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../../images/borna.jpg'
import Contact from '../Contact/Contact';
import resume2 from '../../../resume/DILRUBA JANNAT BORNA(2).pdf'
import Typewriter from 'typewriter-effect';
import HomeProjects from '../HomeProjects/HomeProjects/HomeProjects';
import './Home.css'

const Home = () => {
    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="home_page">

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    
                   
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 18,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}

            />
            
            <Container>
                <Row className="home_page">
                    <Col className="text_tag">
                        <div>
                            <p className="tag_p mx-5 text-sm-start">Hi.. I am Jannat Borna</p>

                             <p className="program mx-5 text-sm-start">

                                <Typewriter
                                 
                                    options={{
                                       
                                        autoStart: true,
                                        loop: true,
                                    }}
                               
                                    onInit={(typewriter) => {
                                       
                                        typewriter 
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .typeString('<strong class="typewriter_text">Programmer!</strong>')
                                            .pauseFor(2000)
                                            .deleteChars(11)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .typeString('<strong class="typewriter_text">React Developer!</strong>')
                                            .pauseFor(2000)
                                            .start()
                                            .deleteChars(19)
                                            .typeString('<strong class="typewriter_text">Web Developer!</strong>')
                                            .start()
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .deleteChars(16)
                                            .typeString('<strong class="typewriter_text">Front End Developer!</strong>')
                                            .deleteChars(21)
                                            .pauseFor(2000)
                                            .changeCursor('<strong class="text_cursor">|</strong>')
                                            .start();
                                            
                                        

                                           
                                           
                                    }}

                                />

                             </p>
                          
                            <p className="tag_small mx-5 text-sm-start">I am an enthusiastic JavaScript with knowing some frameworks for the frontend and the backend.I always focus on learning new technology. </p>

                           
                            <div className="home_button">
                                <button className=" mb-3 mx-5 button_color">Hire Me</button>
                                <a href={resume2}><button className="mt-3 button_color">Download Resume</button></a
                                >

                           </div>
                            <div className="all_link text-sm-middle">
                                <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github"></i></a>
                               
                                <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-3"><i className="fab fa-linkedin"></i></a>

                                <a href="https://www.instagram.com/borna_jannat/" className="mx-3"><i class="fab fa-instagram"></i></a>
                               
                                <a href="https://www.facebook.com/Bornabaset" className="mx-3"><i className="fab fa-facebook-square"></i></a>

                                <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter"></i></a>
                           </div>

                        </div>
                    </Col>
                    
                    <Col className="image">
                          <Image className="h-25 w-75 mt-5" src={img} roundedCircle />
                    </Col>
                    
                </Row>   
                        
              <HomeProjects></HomeProjects>    

              <Contact></Contact> 
                
            </Container>


         
        </div>
    );
};

export default Home;