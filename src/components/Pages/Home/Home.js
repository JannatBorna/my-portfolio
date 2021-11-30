import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../../images/borna-3.jpg'
import Contact from '../Contact/Contact';
import resume2 from '../../../resume/DILRUBA JANNAT BORNA(2).pdf'

import HomeProjects from '../HomeProjects/HomeProjects/HomeProjects';
import './Home.css'

const Home = () => {
    return (
        <div className="home_page">
            <Container>
                <Row className="home_page">
                    <Col className="text_tag">
                        <div className="">
                            <p className="tag_p mx-5 text-sm-start">Hi.. I am Jannat Borna</p>

                             <p className="program mx-5 text-sm-start">Front End Developer</p>
                            
                          
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