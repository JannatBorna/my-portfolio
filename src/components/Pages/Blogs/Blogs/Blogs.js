import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
          fetch('/blog.json')
          .then(res => res.json())
          .then(data => setBlogs(data))

    }, [])

    return (
       <section id="blogs">
          <Container>
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