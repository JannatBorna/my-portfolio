import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../../images/borna-3.jpg'

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
                            
                          
                            <p className="tag_small mx-5 text-sm-start">I am an enthusiastic JavaScript with knowing some frameworks for the frontend and the backend. </p>

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
                
            </Container>


            <footer className="my-5 text-sm-middle">
                <small className="footer_text">Copyright &copy; 2021 | Jannat Borna</small>
                <br />
                <span className="text-white my-5 footer_add">Dhaka, Bangladesh</span>

                <div className="all_link text-sm-middle">
                    <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                    <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-3"><i className="fab fa-linkedin fs-6"></i></a>

                    <a href="https://www.instagram.com/borna_jannat/" className="mx-3"><i class="fab fa-instagram fs-6"></i></a>

                    <a href="https://www.facebook.com/Bornabaset" className="mx-3"><i className="fab fa-facebook-square fs-6"></i></a>

                    <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter fs-6"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Home;