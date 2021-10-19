import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-container">
            <h2 className="mb-5">Create Your Account</h2>

            <Form>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control className='form-input' type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className='form-input' type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='form-input' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control classNmae="form-input" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>

            <br />------------- OR -------------- <br />

            <button onClick={signInUsingGoogle} className="btn btn-warning my-3">Google Sign In</button>

            <small>Already have an account? <NavLink to="/login">Login</NavLink></small>
        </div>
    );
};

export default Register;