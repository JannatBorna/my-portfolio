import React from 'react';
import { Container, Image } from 'react-bootstrap';
import image from '../../../../images/recent-project/Capture.PNG';
import './RecentProjects.css'

const RecentProjects = () => {
    return (
        <div id="recent">
            <h2 className="recent_text my-3">My Recent Projects</h2>
               <div className="recent_projects">
                    <div className="recent_container">
                        <Container>
                        <Image className="w-100" src={image} />
                        <h4 className="recent_name my-2">learning school</h4>
                        <p className="description_text"> My website name is Learning School. This website is Learning School related only. School learning is the acquisition of knowledge, subject matter, information, understanding, and skill from teaching.</p>

                        <p className="font_recent"><span className='font_color'>Front-end technology:</span> React js, Bootstrap, React Router, Firebase Authentication,React Spring, Material UI.</p>

                        <p className="back_recent"><span className='font_color'>Back-end technology:</span> Node js,Express js, MongoDB
                        </p>

                        <a href="https://github.com/JannatBorna/assignment-larning-school-client"><button className="mt-3 mx-3 recent_button">Client code</button></a>

                        <a href="https://github.com/JannatBorna/assignment-larning-school-server"><button className="mt-3 mx-3 recent_button">Server code</button></a>

                        <a href="https://learning-school-bcec1.web.app"><button className="mt-3 recent_button">Live Demo</button></a>
                    </Container>
                 </div>
            </div>
    </div>
    );
};

export default RecentProjects;   

                