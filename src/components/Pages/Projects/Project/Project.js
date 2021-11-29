import React from 'react';
import { Container} from 'react-bootstrap';
import './Project.css'

const Project = ({ project }) => {
    const { name, img, discretion, github, live, Technology } = project;
    return (
        <div >
            <Container className="project">
               <div>
                    <img className="w-75 fluid mt-3" src={img} alt="" />
                    <br />
                    <a href={github}><button className="mt-5 text-white mx-3  bg-dark">Source Code</button></a>

                    <a href={live}><button className=" mt-5 text-white bg-dark">Live Project</button></a>
               </div>
                
                <div>
                    <h4 className="name-text my-2 text-danger">{name}</h4>
                    <h6 className="price-text text-white"><p>{discretion}</p></h6>
                    <h6 className="price-text text-white"><p><span className="text-danger">Technology:</span> {Technology}</p></h6>

                    
                </div>
                
            </Container>
        </div>
    );
};

export default Project;