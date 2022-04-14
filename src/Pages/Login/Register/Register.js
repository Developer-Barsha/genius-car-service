import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'


const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    };

    const handleRegister=event=>{
        event.preventDefault();

        const name=(event.target.name.value);
        const email=(event.target.email.value);
        const password=(event.target.password.value);
        if(password.length<6){
            alert('password should have 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    };

    
    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user])
    
    if(error){
        alert(error.message);
    }

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