import React, { useEffect, useState } from 'react';
import HomeProject from '../HomeProject/HomeProject';
import './HomeProjects.css'

const HomeProjects = () => {
    const [homeProjects, setHomeProjects] = useState([]);
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setHomeProjects(data))

    }, [])
    return (
        <div>
            <h2 className="home_project justify-content-middle">My Projects</h2>
            <div className="container_HomeProjects">
                {
                    homeProjects.slice(0, limit ? limit : homeProjects.length).map(homeProject => <HomeProject
                        key={homeProject._id}
                        homeProject={homeProject}
                        setLimit={setLimit}
                    >

                    </HomeProject>)
                }
                <a href="/projects"><button className="mt-3 button_view"><i className="fas fa-eye"></i> View All Projects</button></a>
                
            </div>
        </div>
    );
};

export default HomeProjects;