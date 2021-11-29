import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { name, img, discretion } = project;
    return (
        <div className="project">
            <Container>
                <img className="w-100" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <h6 className="price-text"><p>{discretion}</p></h6>

                {/* <Link to={`/booking/${_id}`}><button className="btn btn-secondary  my-2">Booking Now <i className="fas fa-angle-double-right"></i></button> </Link> */}
            </Container>
        </div>
    );
};

export default Project;