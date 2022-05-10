import React from 'react';
import { Container, Image} from 'react-bootstrap';
import img from '../../../images/borna-2.jpg';
import resume2 from '../../../resume/DILRUBA JANNAT BORNA (7).pdf';
import Typewriter from 'typewriter-effect';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
    AOS.init();
    
return (
    <section id="home-section">
        <Container>
            {/* <Row> */}
                <div className="home-image">
                   <div data-aos="flip-up" data-aos-duration="3000">
                       <Image src={img} alt="..."/>
                   </div>
                </div>

                <div className="text-center mt-5">
                        <h1 data-aos="zoom-in-down" data-aos-duration="3000">Hi.. I'm Jannat Borna</h1>
                        <p className="program" data-aos="zoom-in-up" data-aos-duration="3000">
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
                                .deleteChars(20)
                                .pauseFor(2000)
                                .changeCursor('<strong class="text_cursor">|</strong>')
                                .start();
                                    }} 
                            />       
                        </p>       
                                           
                        <p data-aos="zoom-in-left" data-aos-duration="3000">
                            I am an enthusiastic JavaScript with knowing some frameworks for the frontend <br /> and the backend.I always focus on learning new technology. </p>   

             <div className="home-button text-center">
                <a href="/Contact"><button className=" mb-2 mx-2 main-button">Hire Me</button></a>
                <a href={resume2}><button className="mt-2 main-button">Resume</button></a>
            </div>    
                
                                
                                               
            <div className="all-link text-sm-middle">
                <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github  main-button"></i></a>
                               
                <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-3"><i className="fab fa-linkedin  main-button"></i></a>

                <a href="https://www.instagram.com/borna_jannat/" className="mx-3"><i class="fab fa-instagram  main-button"></i></a>
                               
                <a href="https://www.facebook.com/Bornabaset" className="mx-3"><i className="fab fa-facebook-square  main-button"></i></a>

                <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter  main-button"></i></a>
            </div>                

            </div>      

        <hr />        

        <div>
            <a href="/profile" className='text-white'><button className="more-button">READ MORE</button></a>
        </div>
    
  </Container>  
</section>
    );
};

export default Home;