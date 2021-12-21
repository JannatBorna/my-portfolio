  import React from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from "react-spring";
import './HomeProject.css'

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  
const HomeProject = ({ homeProject}) => {

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5, tension: 350, friction: 40
    }
  }))

    const { name,img, disc1, disc2, github, live} = homeProject;
return ( 
      <div className="service">
         
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    
    >
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
    </animated.div>

</div>                   
                  
);
  };
  
export default HomeProject;                  
                     
                  
             
