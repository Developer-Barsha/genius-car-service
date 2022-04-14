import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('PLease enter your email');
        }
    };

    const navigateRegister = () => {
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary mb-3 text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" className='w-100 mb-3' type="submit">
                    Log In
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <span className='text-primary' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register</span></p>
            <p>Forgot Password? <span className='text-primary' style={{ cursor: 'pointer' }} onClick={resetPassword}>Reset Password</span></p>
            <SocialLogin></SocialLogin>

            <ToastContainer />
        </div>
    );
};

export default Login;