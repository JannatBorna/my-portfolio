import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { name, img, discretion, github, live } = project;
    return (
        <div className="project">
            <Container>
                <img className="w-100 fluid" src={img} alt="" />
                <h4 className="name-text my-2 text-white">{name}</h4>
                <h6 className="price-text text-white"><p>{discretion}</p></h6>

                {/* <a to={`/booking/${_id}`}><button className="btn btn-secondary  my-2">Booking Now <i className="fas fa-angle-double-right"></i></button>  */}

                <a href={github}><button className="my-2 text-white mx-3  bg-dark">Source Code</button></a>

                <a href={live}><button className="my-2 text-white bg-dark">Live Project</button></a>
                
            </Container>
        </div>
    );
};

export default Project;