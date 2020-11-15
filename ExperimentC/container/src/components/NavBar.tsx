import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (): JSX.Element => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/" >Container Frontend</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/viewContent">Content</Nav.Link>
                <Nav.Link as={Link} to="/viewCart">Cart</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;