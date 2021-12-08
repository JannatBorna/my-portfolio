import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../../images/skills/full.jpg';
import image2 from '../../../images/skills/web.jpg';
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
                                                {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                                                <a href="#" className="btn_button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className=" title_text">MERN Stack Developer</h4>
                                                <p className="card-text">I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work. You can see i have done some MERN project.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>                                                     
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
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
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
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
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="#">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                     
                    </div>
                </div>
            </section>
    {/* </div> */}
</Container>
);
};

export default Profile;
  