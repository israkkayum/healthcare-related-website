import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-container">
            <h2 className="mb-5">Log In to Your Account</h2>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='form-input' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control classNmae="form-input" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>

            <br />------------- OR -------------- <br />

            <button onClick={signInUsingGoogle} className="btn btn-warning my-3">Google Sign In</button>

            <small>Nedd an account? <NavLink to="/register">Register</NavLink></small>
        </div>
    );
};

export default Login;