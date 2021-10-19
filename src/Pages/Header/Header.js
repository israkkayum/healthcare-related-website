import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand style={{fontSize: '30px', fontWeight: 'bold'}} href="/home#home">MediClinic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end header-text">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        {user?.email ?<div>
                        <Button onClick={logOut} variant="light">Logout</Button>
                        <Navbar.Text className="mx-3">
                            {<Image src={user?.photoURL} roundedCircle style={{width: '50px', height: '50px'}} />}
                        </Navbar.Text></div> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;