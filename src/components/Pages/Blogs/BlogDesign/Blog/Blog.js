import React from 'react';
import './Blog.css';
import { Container } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { name, img, discretion } = blog;
return (
    <section id="blogs">
        <Container>
            <div className="blog_section">
                <img className="w-100 mt-3" src={img} alt="" />
                <h3 className="blog_name mt-4 mx-2">{name}</h3>
                <p className="blog_discretion mt-2 mx-2">{discretion}</p>
                <button className="mt-3 mb-3 mx-2 blog_button">Read More</button>
            </div>

            <div className="view_read">
                <div className="view_comment mx-3">Views <br /> ----- <br /> 254</div>
                <div className="view_comment mx-3">Reads <br /> ----- <br />264</div>
                <div className="view_comment mx-3">Comment <br /> ----- <br /> 1235</div>
            </div>
            
        </Container>
    </section>
    );
};

export default Blog;