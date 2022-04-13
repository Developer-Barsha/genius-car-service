import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    };

    const nameRef=useRef('');
    const emailRef=useRef('');
    const passwordRef=useRef('');

    const handleRegister=event=>{
        event.preventDefault();

        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

        console.log(name, email, password);
    };

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-4 mb-3'>Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" ref={nameRef} name="name" id="1" placeholder='Your Name'/>

                <input type="email" ref={emailRef} name="email" id="2" placeholder='Email Address' required/>
                
                <input type="password" ref={passwordRef} name="password" id="3" placeholder='Password' required/>
                
                <input type="submit" value="Register" />
            </form>
            <p>Have an account? <span className='text-danger' style={{cursor:'pointer'}} onClick={navigateLogin}>Login here</span></p>
        </div>
    );
};

export default Register;