import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    };

    const handleRegister=event=>{
        event.preventDefault();

        const name=(event.target.name.value);
        const email=(event.target.email.value);
        const password=(event.target.password.value);
        console.log(password,name, email);
    };

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-4 mb-3'>Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your Name'/>

                <input type="email" name="email" id="2" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="3" placeholder='Password' required/>
                
                <input type="submit" value="Register" />
            </form>
            <p>Have an account? <span className='text-danger' style={{cursor:'pointer'}} onClick={navigateLogin}>Login here</span></p>
        </div>
    );
};

export default Register;