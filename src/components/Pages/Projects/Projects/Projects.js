import React, { useState, useEffect} from 'react';
import Project from '../Project/Project';
import './Projects.css';
import Particles from "react-tsparticles";


const Projects = () => {
    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };





    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
       
    }, [])


    return (
         <section>
            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{


                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 18,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}

                />
                <h2 className="header_text mt-4">My Projects</h2>
                <div className="container_projects">
                    {
                        projects.map(project => <Project
                            key={project._id}
                            project={project}


                        >
                       </Project>)
                    }
                </div>
                        


            <footer className="my-5">
                    <small className="footer_text">Copyright &copy; 2021 | Jannat Borna</small>
                    <br />
                    <span className="text-white my-5">Dhaka, Bangladesh</span>


                    <div className="contact_link text-sm-middle">
                        <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                        <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-2"><i className="fab fa-linkedin fs-6"></i></a>

                        <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                        <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                        <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Projects;


            

                
                