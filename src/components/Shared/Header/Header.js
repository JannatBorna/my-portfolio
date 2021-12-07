import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


import resume from '../../../resume/DILRUBA JANNAT BORNA(2).pdf'
import './Header.css'
// import { saveAs } from "file-saver";

const Header = () => {
    // const saveFile = () => {
    //     saveAs(
    //         "https://drive.google.com/file/d/1P7Zkc474NSN9anV42v55jO2rRG-HNmZF/view?usp=sharing"
    //     );
    // };
      
    return (
        <div className="header_section">
            <Navbar collapseOnSelect expand="lg" variant="white">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                    
                        {/* <img src={icon} alt="" width="60" height="40" className="img_color"/> */}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav>
                            <Nav.Link className="nav_bar" href="/home">HOME</Nav.Link>
                            <Nav.Link className="nav_bar" href="/projects">PROJECTS</Nav.Link>
                            <Nav.Link className="nav_bar" href="/aboutMe">ABOUT ME</Nav.Link>
                            <Nav.Link className="nav_bar" href="/blog">BLOG</Nav.Link>
                            <Nav.Link className="nav_bar" href="/contact">CONTACT</Nav.Link>
                            <Nav.Link className="nav_bar" href="/profile">Profile</Nav.Link>
                            <Nav.Link className="nav_bar" href={resume}>DOWNLOAD RESUME</Nav.Link>
                            
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;