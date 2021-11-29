  import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProject.css'
  
const HomeProject = ({ homeProject}) => {
      const { name, img, discretion } = homeProject;
      return (
          <div className="service">

              <Container>
                  <img className="w-100" src={img} alt="" />
                  <h4 className="name-text my-2 text-danger">{name}</h4>
                  <small className="description-text text-white">{discretion?.slice(0, 50)}</small>
                  
                     <br />
                  <Link to="/projects"><button className="btn btn-secondary  my-2">Details</button> </Link>
              </Container>

          </div>
      );
  };
  
  export default HomeProject;
  
  
  
  
  
  
  
  
  
  
  {/*import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProject = () => {
    // const { name, img, discretion} = homeProject;
    // return (
        <div className="service">
            
           <Container>
                <img className="w-100" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{discretion?.slice(0, 50)}</small>
                

                <Link to=""><button className="btn btn-secondary  my-2">Booking Now <i className="fas fa-angle-double-right"></i></button> </Link>
            </Container> 

        </div>
    );
};

export default HomeProject;*/}