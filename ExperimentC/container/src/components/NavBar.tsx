import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { RemoteMFComponent } from "../utils/mf-react-util";

const NavBar = (): JSX.Element => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/" >Container Frontend</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/viewContent">Content</Nav.Link>
            </Nav>
            <Nav>
                <RemoteMFComponent config={{ scope: 'app_mf_remote', module: './CartButton'}} componentProps={{ route: '/viewCart' }} />;
            </Nav>
        </Navbar>
    );
};

export default NavBar;
