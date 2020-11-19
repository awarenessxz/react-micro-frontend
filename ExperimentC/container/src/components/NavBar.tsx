import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import {RootState} from "../redux/root-reducer";

const NavBar = (): JSX.Element => {
    const title = useSelector((state: RootState) => state.app.title);

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/" >{title}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/viewContent">Content</Nav.Link>
                <Nav.Link as={Link} to="/viewCart">Cart</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;