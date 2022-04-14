import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        // if(user){
        //     navigate('/home');
        // }
        if (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary mb-3 text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;