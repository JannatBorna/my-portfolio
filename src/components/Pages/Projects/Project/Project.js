import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ project }) => {

    AOS.init();
    const { name, slid1, slid2, slid3, discretion, disc1, disc2, disc3, disc4, disc5, disc6, github, live } = project;
    
    return (
        <div >
            <Container className="project">
                 
                        <Carousel variant="white">
                      
                            <Carousel.Item className="carousel_img">
                                <img
                            className="d-block w-100 mt-4"
                                    src={slid1}
                                    alt="First slide"

                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 mt-4"
                                    src={slid2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>


                            <Carousel.Item>
                                <img
                                    className="d-block w-100 mt-4"
                                    src={slid3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                       

                        </Carousel>
                      
                       
                        <div className="mx-4">
                            <h4 className="name_text my-2" data-aos="fade-left" data-aos-duration="3000">{name}</h4>
                            <h6 className="discretion_type text-sm-start" data-aos="fade-right" data-aos-duration="3000"><p>{discretion}</p></h6>
                            <ul className="text-sm-start text_type" data-aos="fade-up" data-aos-duration="3000">
                                <li>{disc1}</li>
                                <li>{disc2}</li>
                                <li>{disc3}</li>
                                <li>{disc4}</li>
                                <li><span className="text-danger fs-6">Front-end technology: </span>{disc5}</li>
                                <li><span className="text-danger fs-6">Back-end technology: </span>{disc6}</li>
                            </ul>

                            <a href={github} data-aos="zoom-in-down" data-aos-duration="3000"><button className="mt-3 mx-3 button_color">Source Code</button></a>

                            <a href={live} data-aos="zoom-in-up" data-aos-duration="3000"><button className="mt-3 button_color">Live Demo</button></a>
                            
                        </div>
                    
            </Container>
        </div>
    );
};

export default Project;
                   
                   

              

                
              
                    
           


                   
               
                
                