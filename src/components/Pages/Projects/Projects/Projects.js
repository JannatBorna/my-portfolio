import React, { useState, useEffect} from 'react';
import Project from '../Project/Project';
import './Projects.css';



const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
       
    }, [])


    return (
         <section>
            <div>
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


            

                
                