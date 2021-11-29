import React, { useEffect, useState } from 'react';
import HomeProject from '../HomeProject/HomeProject';
import './HomeProjects.css'

const HomeProjects = () => {
    const [homeProjects, setHomeProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setHomeProjects(data))

    }, [])
    return (
        <div>
            <h2 className="text-white my_projects justify-content-middle">My Projects</h2>
            <div className="container_HomeProjects">
                {
                    homeProjects.map(homeProject => <HomeProject
                        key={homeProject.name}
                        homeProject={homeProject}

                    >

                    </HomeProject>)
                }
            </div>
        </div>
    );
};

export default HomeProjects;