import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../../images/borna-3.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container>
                <Row className="home_page">
                    <Col className="text_tag">
                        <div className="">
                            <p className="tag_p mx-5 text-sm-start">Hi.. I am Jannat Borna</p>

                             <p className="program mx-5 text-sm-start">Front End Developer</p>
                            {/*<p className="program_two mx-5 text-sm-start">Programmer....</p>
                            <p className="program_three mx-5 text-sm-start">React Developer</p> */}
                            {/* <div className="static-txt">
                            <ul className="dynamic-txt mx-5 text-sm-start">
                                <li><span>Front End Developer</span></li>
                                <li><span>Programmer</span></li>
                                <li><span>React Developer</span></li>
                            </ul>
                         </div>    */}
                          
                            <p className="tag_small mx-5 text-sm-start">I am an enthusiastic JavaScript developer  with knowing some framework for the frontend and the backend.</p>
                        </div>
                    </Col>
                    
                    <Col className="image">
                          <Image className="h-25 w-75 mt-5" src={img} roundedCircle />
                    </Col>
                    
                   
                        
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;