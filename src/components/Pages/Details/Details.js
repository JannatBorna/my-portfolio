import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
   
    const { projectsId } = useParams();
    

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`/projects.json/${projectsId}`)
            .then(res => res.json())
            .then(data => setDetails(data?.projectsId))

    }, []);

   

    return (
        <div>
            <h2 className="text-white">Details Id: {projectsId}</h2>


            <h3>project: {details.name}</h3>


            {/* <Container className="project">
                <div>
                    <Carousel variant="white">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={project?.slid1}
                                alt="First slide"

                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={project?.slid2}
                                alt="Second slide"
                            />
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100 mt-4"
                                src={project?.slid3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>

                </div>

                <div className="mx-4">
                    <h4 className="name_text my-2">{project?.name}</h4>
                    <h6 className="discretion_type text-sm-start"><p>{project?.discretion}</p></h6>
                    <ul className="text-sm-start text_type">
                        <li>{project?.disc1}</li>
                        <li>{project?.disc2}</li>
                        <li>{project?.disc3}</li>
                        <li>{project?.disc4}</li>
                        
                        <li><span className="text-danger fs-6">Front-end technology: </span>{project?.disc5}</li>
                        <li><span className="text-danger fs-6">Back-end technology: </span>{project?.disc5}</li>
                    </ul>

                    <a href={project?.github}><button className="mt-3 mx-3 button_color">Source Code</button></a>

                    <a href={project?.live}><button className="mt-3 button_color">Live Project</button></a>



                </div>

            </Container> */}
        </div>
    );
};

export default Details;