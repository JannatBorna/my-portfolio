import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../../images/icon/b-13.png';
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
        <div>
            <Navbar collapseOnSelect expand="lg" variant="white">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img className="image_tag" src={icon} alt="" /> */}
                        <img src={icon} alt="" width="60" height="40" className="img_color"/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        
                        <Nav>
                            <Nav.Link className="nav_bar" href="#deets">PROJECTS</Nav.Link>
                            <Nav.Link className="nav_bar" href="#deets">CONTACT ME</Nav.Link>
                            <Nav.Link className="nav_bar" href={resume}>DOWNLOAD RESUME</Nav.Link>
                            
                            {/* <button onClick={saveFile}>download</button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;