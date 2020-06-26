import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../assets/logo.png';
import name from '../assets/name.png';
import {IoIosArrowForward} from 'react-icons/io';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
                <Navbar.Brand href="#">
                    <img src={logo}/>
                    <img src={name}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">Why Vyorius?</Nav.Link>
                    <Nav.Link href="#">Solutions</Nav.Link>
                    <Nav.Link href="#">Product</Nav.Link>
                    <Nav.Link href="#">Use Cases</Nav.Link>
                    <Nav.Link href="#">Team</Nav.Link>
                    <Nav.Link href="#">Partners</Nav.Link>
                    <Nav.Link href="#">Contact us</Nav.Link>
                    </Nav>
                    <Button>Launch Vyoris <IoIosArrowForward /> </Button>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
