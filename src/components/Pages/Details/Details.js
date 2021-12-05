import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import image1 from '../../../images/projects/purfum-1.jpg'
import image2 from '../../../images/projects/purfum-2.jpg'
import image3 from '../../../images/projects/purfum-3.jpg'
import './Details.css'

const Details = () => {
   
    const { projectsId } = useParams();
    
    
    

   

    return (
        <div className="details_section">
            <h2 className="details_param">Details Id: {projectsId}</h2>


            {/* <h3>project: {details.name}</h3> */}


            <Container className="project">
                <div>
                    <Carousel variant="white">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={image1}
                                alt="First slide"

                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={image2}
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={image3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>

                </div>

                <div className="mx-4">
                    <h4 className="name_text my-2">perfume pride</h4>
                    <h6 className="discretion_type text-sm-start"><p>This website is Niche website. This website is Perfume related only. This website has two dashboards -user and admin. User Dashboard - Payment, add a review, my order page.Admin Dashboard - Manage All Orders, Add A Product, Make Admin, Manage Products page that only admins can see, not users.</p></h6>
                    <ul className="text-sm-start text_type">
                        <li>Have admin and user different dashboard.</li>
                        <li>Admin can delete, add, manage services.</li>
                        <li>Admin can Make Admin also</li>
                        <li>User can Login via (Email, Password)</li>
                        
                        <li><span className="text-danger fs-6">Front-end technology: </span>React js, Bootstrap, React Router, Firebase Authentication,React Spring, Material UI</li>
                        <li><span className="text-danger fs-6">Back-end technology: </span>Node js,Express js, MongoDB</li>
                    </ul>

                    <a href="https://github.com/JannatBorna/project-client-side-assignment-12"><button className="mt-3 mx-3 button_color">Source Code</button></a>

                    <a href="https://assignment12-5175d.web.app/"><button className="mt-3 button_color">Live Project</button></a>

                    <a href="/projects"><button className="mt-3 mx-3 more_projects">More Project</button></a>

                </div>

            </Container>
        </div>
    );
};

export default Details;