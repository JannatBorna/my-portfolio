import React from 'react';
import './Blog.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { name, img, discretion, myBlog } = blog;
return (
    <section id="blogs">
        <Container>
            
            <div className="blog_section">
                <img className="w-100 mt-3" src={img} alt="" />
                <h3 className="blog_name mt-4 mx-2">{name}</h3>
                <p className="blog_discretion mt-2 mx-2">{discretion}</p>
                <a href={myBlog}><button className="mt-3 mb-3 mx-2 blog_button">Read More</button></a>
            </div>

            <div className="view_read mt-1">
                <div className="view_comment mx-3">Views<br /> -----<br /> 1254</div>
                <div className="view_comment mx-3">Read<br /> -----<br />5</div>
                <div className="view_comment mx-3">Comments<br /> -----<br /> 12</div>
            </div>
            
        </Container>
    </section>
    );
};

export default Blog;