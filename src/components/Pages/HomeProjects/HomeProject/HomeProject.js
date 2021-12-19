  import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeProject.css'
  
const HomeProject = ({ homeProject}) => {
    const { name,img, disc1, disc2, github, live} = homeProject;
      return ( 
      <div className="service">
         
           <Container>   
                <img className="w-100 img-size" src={img} alt="" />
                  <h4 className="name-text text-danger">{name}</h4>
                  
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
                     
                  
             
