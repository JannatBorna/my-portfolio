import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import icon from '../../../images/icon/b-7.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="white">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img className="image_tag" src={icon} alt="" /> */}
                        <img src={icon} alt="" width="55" height="30"></img>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav>
                            <Nav.Link className="nav_bar" href="#deets">PROJECTS</Nav.Link>
                            <Nav.Link className="nav_bar" href="#deets">CONTACT ME</Nav.Link>
                            <Nav.Link className="nav_bar" href="#deets">DOWNLOAD RESUME</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;