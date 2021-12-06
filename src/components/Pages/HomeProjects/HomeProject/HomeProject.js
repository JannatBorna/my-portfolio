  import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProject.css'
  
const HomeProject = ({ homeProject}) => {
    const { name,img, disc1, disc2, github, live} = homeProject;
      return (
          <div className="service">

              <Container>
                  <img className="w-100 img-size" src={img} alt="" />
                  <h4 className="name-text my-2 text-danger">{name}</h4>
                  
                  <ul className="text-sm-start text_type">
                      <li>{disc1}</li>
                      <li>{disc2}</li>
                     
                     
                  </ul>
                  
                     
                  <a href={github}><button className="mt-3 mx-3 button_color">Source Code</button></a>

                  <a href={live}><button className="mt-3 button_color">Live Demo</button></a>

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