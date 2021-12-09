import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../../images/skills/full.jpg';
import image2 from '../../../images/skills/web-5.jpg';
import image3 from '../../../images/skills/ps.jpg';
import './Profile.css'

const Profile = () => {
    return (
       <Container>     
      
        <section id="team" className="pb-5">
            <div className="container">
                    <h5 className="section-title h1">Chose I Provide</h5>
                    <div className="row">
                       
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div className="main_flip">
                                    <div className="front_side">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid w-100" src={image1} alt="card image" /></p>
                                                <h4 className="card-title">MERN Stack Developer</h4>
                                               
                                                <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className=" title_text">MERN Stack Developer</h4>
                                                <p className="card-text">I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work. You can see i have done some MERN project.</p>
                                                <div className="contact_link text-sm-middle">
                                                    <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                                                    <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-2"><i className="fab fa-linkedin fs-6"></i></a>

                                                    <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                    <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                    <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                     
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div className="main_flip">
                                    <div className="front_side">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid w-100" src={image2} alt="card image" /></p>
                                                <h4 className="card-title">Web Designing</h4>
                                                {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                                <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="title_text">Web Designing</h4>
                                                <p className="card-text">I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below.</p>
                                                <div className="contact_link text-sm-middle">
                                                    <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                                                    <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-2"><i className="fab fa-linkedin fs-6"></i></a>

                                                    <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                    <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                    <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div className="main_flip">
                                    <div className="front_side">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid w-100" src={image3} alt="card image" /></p>
                                                <h4 className="card-title">PSD To HTML</h4>
                                                {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                                <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="title_text">PSD To HTML</h4>
                                                <p className="card-text">I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website.</p>
                                                <div className="profile_link text-sm-middle">
                                                    <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                                                    <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-2"><i className="fab fa-linkedin fs-6"></i></a>

                                                    <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                                                    <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                                                    <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</Container>
);
};

export default Profile;  

                     
                    
  