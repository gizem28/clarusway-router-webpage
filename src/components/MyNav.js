import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../img/logo.png";
import { useNavigate } from 'react-router-dom';


const MyNav = () => {
  //useNavigate en ustte tanimlanmasi gereken bir hook
  const navigate = useNavigate();
    return (
        //logoya tiklayan olursa eger home sayfasinda degilse home gec
        <Navbar
          bg="light"
          expand="lg"
          style={{height:90, marginBottom:0}}
          onSelect={(eventKey) =>
            eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)}>
              <Nav.Link eventKey="home">
                <img src={logo} alt=""  style={{height:65, marginLeft:20}}/>
              </Nav.Link>
              <Nav className="ms-auto" >
                <NavDropdown className='h4'  style={{padding:15, fontWeight:"bold"}} title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item className='h4' eventKey="developing">
                    Full-Stack-Developing
                  </NavDropdown.Item>
                  <NavDropdown.Item className='h4' eventKey="data-science">
                    Data-Science
                  </NavDropdown.Item>
                  <NavDropdown.Item className='h4' eventKey="devops">
                    AWD-DEVOPS
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey="about" className='h4' style={{padding:20, fontWeight:"bold"}}>About</Nav.Link>
                <Nav.Link eventKey="instructors" className='h4' style={{padding:20, fontWeight:"bold"}}>Instructors</Nav.Link>
                <Nav.Link eventKey="contact" className='h4' style={{padding:20, fontWeight:"bold"}}>Contact</Nav.Link>
              </Nav>
        </Navbar>
    );
  };
  export default MyNav;
