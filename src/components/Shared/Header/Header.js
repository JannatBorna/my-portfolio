import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import icon from '../../../images/icon/icon-3.png';
import resume from '../../../resume/DILRUBA JANNAT BORNA (7).pdf';
import './Header.css'

const Header = () => {

    return (
        <div className="header_section">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                    
                        <img src={icon} alt="" width="60" height="40" className="img_color"/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav defaultActiveKey="/home">
                            <Nav.Link  className="nav_bar active" href="/home">Home</Nav.Link>
                            <Nav.Link eventKey="/projects" className="nav_bar" href="/projects">Projects</Nav.Link>
                            <Nav.Link className="nav_bar" href="/aboutMe">About Me</Nav.Link>
                            <Nav.Link className="nav_bar" href="/blogs">Blogs</Nav.Link>
                            <Nav.Link className="nav_bar" href="/recentProject">Recent Project</Nav.Link>
                            <Nav.Link className="nav_bar" href="/contact">Contact</Nav.Link>
                           <Nav.Link className="nav_bar resume_download" href={resume}>Download Resume</Nav.Link>
                            
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;