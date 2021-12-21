import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import Particles from "react-tsparticles";
import './Blogs.css';

const Blogs = () => {

    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };



    const [blogs, setBlogs] = useState([])
    useEffect(() => {
          fetch('/blog.json')
          .then(res => res.json())
          .then(data => setBlogs(data))

    }, [])

    return (
       <section id="blogs">
          <Container>
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
                                value: 20,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 3,
                            },
                        },
                        detectRetina: true,
                    }}

                />
                <h2 className="my_blogs">My Blogs</h2>

                <div className="blog_container">
                    {
                        blogs.map((blog => <Blog
                            key={blog._id}
                            blog={blog}
                        >

                        </Blog>))
                    }

                </div>
          </Container>
       </section>
    );
};

export default Blogs;