import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const CartButton = React.lazy(() => import('app_mf_remote/CartButton'));

const NavBar = (): JSX.Element => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/" >Container Frontend</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/viewContent">Content</Nav.Link>
            </Nav>
            <Nav>
                <React.Suspense fallback={<div>Falling Back to Suspense...</div>}>
                    <CartButton item={{ route: '/viewCart' }} />
                </React.Suspense>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
