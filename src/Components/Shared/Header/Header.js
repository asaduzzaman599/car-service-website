import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} height={35} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Service</Nav.Link>
                            <Nav.Link href="home#experts">Expert</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/add">Add Service</Nav.Link>
                                        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                                    </>
                                    : ''
                            }

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ? <Button onClick={() => signOut(auth)} variant="link" className="text-decoration-none text-white">Logout</Button> : <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;