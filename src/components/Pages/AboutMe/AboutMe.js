import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../images/about/about-2.jpg';
import './AboutMe.css';


const AboutMe = () => {
    return (
    <div className="about_area mb-5">
        <Container>
            
                <Row className="text-sm-start">
                    <Col lg={4} md={4} sm={12}>
                        <div className="about_img mx-5">
                            <img className="mt-5" src={about} alt="" />
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className="about_text">
                            <h2>Hi..!! I'm Dilruba Jannat Borna</h2>
                            <p>I am an enthusiastic JavaScript developer with knowing some frameworks for the frontend and the backend. I  MERN developer. I always focus on learning new technology. I will finish my study in the Department of Computer Science and Engineering(CSE). University of Development Alternative (UODA), Dhaka.</p>

                            <div className="all_link text-sm-middle">
                                <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github"></i></a>

                                <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-3"><i className="fab fa-linkedin"></i></a>

                                <a href="https://www.instagram.com/borna_jannat/" className="mx-3"><i class="fab fa-instagram"></i></a>

                                <a href="https://www.facebook.com/Bornabaset" className="mx-3"><i className="fab fa-facebook-square"></i></a>

                                <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter"></i></a>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 text-sm-start" >
                    <Col lg={6} md={6} sm={12}>
                       <h1 className="about_skills mt-5">My Skills</h1>
                           
                        <div className="text-sm-start mt-4">
                           <ul>
                               <li className="text-sm-start about_li">Expertise:</li>
                           </ul>
                            <button className="text-white mx-2 my-2 btn_style">React JS</button>
                            <button className="text-white mx-2 my-2 btn_style">React Router</button>
                            <button className="text-white mx-2 my-2 btn_style">React Bootstrap</button>
                            <button className="text-white mx-2 my-2 btn_style">Material UI</button>
                            <button className="text-white mx-2 my-2 btn_style">HTML5</button>
                            <button className="text-white mx-2 my-2 btn_style">CSS2</button>
                            <button className="text-white mx-2 my-2 btn_style">Bootstrap</button>
                            <button className="text-white mx-2 my-2 btn_style">JavaScript (ES6)</button>
                            <button className="text-white mx-2 my-2 btn_style">Tailwind css</button>
                       </div>



                        
                        <div className="text-sm-start mt-4">
                            <ul>
                                <li className="text-sm-start about_li">Comfortable:</li>
                            </ul>
                            <button className="text-white mx-2 my-2 btn_style">Node</button>
                            <button className="text-white mx-2 my-2 btn_style">MongoDB</button>
                            <button className="text-white mx-2 my-2 btn_style">React Router</button>
                            <button className="text-white mx-2 my-2 btn_style">Firebase</button>
                        </div>    
                        

                        <div className="text-sm-start mt-4">
                           <ul>
                              <li className="text-sm-start about_li">Familiar:</li>
                           </ul>
                            <button className="text-white mx-2 my-2 btn_style">Material UI</button>
                         </div>    
                            
                        <div className="text-sm-start mt-4">
                            <ul>
                                <li className="text-sm-start about_li">Tools:</li>
                            </ul>
                            <button className="text-white mx-2 my-2 btn_style">Heroku</button>
                            <button className="text-white mx-2 my-2 btn_style">Netlify</button>
                            <button className="text-white mx-2 my-2 btn_style">Firebase</button>
                            <button className="text-white mx-2 my-2 btn_style">Chrome Dev-tool</button>
                            <button className="text-white mx-2 my-2 btn_style">VSCode</button>
                            <button className="text-white mx-2 my-2 btn_style">Github</button>
                        </div>    
                        
                     <div className="text-sm-start mt-4">
                            <ul>
                               <li className="text-sm-start about_li">Extra Skills:</li>
                            </ul>
                            <button className="text-white mx-2 my-2 btn_style">Microsoft Word</button>
                            <button className="text-white mx-2 my-2 btn_style">Microsoft Powerpoint</button>
                            <button className="text-white mx-2 my-2 btn_style">Microsoft Excel</button>
                            
                        </div>  
                    </Col>

                        
                        
     
                    
                   
                    <Col lg={4} md={4} sm={12}>
                       <div className="education mt-5 text-sm-start">
                            <h2 className="about_education mt-5">My Education</h2>
                            <h5>B.Sc. in Computer Science and Engineering(CSE)</h5>
                            <span>University of Development Alternative (UODA)</span>
                            <small> January 2018 – Current</small>
                        </div>
                           
                        <div className="education mt-5 text-sm-start">
                            <h2 className="about_education mt-5">My Hobby</h2>
                            <ul>
                                <li>I like to play video games</li>
                                <li>Reading books</li>
                                <li>learning something new</li>
                                <li>It's my favorite part, always self toking, It's very important for every person.</li>
                            </ul>
                            
                           
                        </div>


                       
                    </Col>
                </Row>
               
        </Container>   


        <footer className="my-5">
           <small className="footer_text">Copyright &copy; 2021 | Jannat Borna</small>
               <br />
            <span className="text-white my-5 footer_add">Dhaka, Bangladesh</span>
        </footer>

         </div>
    );
};

export default AboutMe;


                        
                       

                        
                        