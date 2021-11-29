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
         <div>
            <h2 className="text-white">My Projects</h2>
            <div className="container_projects">
            {
                projects.map(project => <Project
                  key={project.name}
                  project={project}
                
                >

                </Project>)
            }
            </div>
        </div>
    );
};

export default Projects;