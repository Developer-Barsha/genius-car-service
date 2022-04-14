import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [agree, setAgree]=useState(false);

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };

    if (loading || updating) {
        return <Loading></Loading>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree= event.target.terms.checked;

        if (password.length < 6) {
            toast('password should have 6 characters');
            return;
        }

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName : name });
        toast('Updated profile');
        navigate('/');

    };

    // useEffect(() => {
    // }, [user])

    if (error || updateError) {
        toast(error.message || updateError);
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-4 mb-3'>Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your Name' />

                <input type="email" name="email" id="2" placeholder='Email Address' required />

                <input type="password" name="password" id="3" placeholder='Password' required />

                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Terms & Conditions</label>

                {/* <input className={`btn btn-primary mt-2 ${agree ? 'd-block' : 'disabled'}`} type="submit" value="Register" /> */}
                
                <input disabled={!agree} className='btn btn-primary mt-2' type="submit" value="Register" />

            </form>
            <p>Have an account? <span className='text-primary' style={{ cursor: 'pointer' }} onClick={navigateLogin}>Login here</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;