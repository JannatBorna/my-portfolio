import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import icon from '../../../images/icon/icon-3.png'
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
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                    
                        <img src={icon} alt="" width="60" height="40" className="img_color"/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav>
                            <Nav.Link className="nav_bar" href="/home">Home</Nav.Link>
                            <Nav.Link className="nav_bar" href="/projects">Projects</Nav.Link>
                            <Nav.Link className="nav_bar" href="/aboutMe">About Me</Nav.Link>
                            <Nav.Link className="nav_bar" href="/blog">Blog</Nav.Link>
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