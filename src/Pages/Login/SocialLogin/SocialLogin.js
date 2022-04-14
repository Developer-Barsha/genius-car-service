import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUuser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    let errorElement;

    if ((error || gitError) || fbError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {gitError?.message}</p>;
    }

    if (user || gitUser) {
        navigate('/home');
    }    

    if ((loading || gitLoading )|| fbLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='w-50 bg-primary' style={{ height: '1px' }}>
                </div>
                <p className='mt-2 px-3'>or</p>
                <div className='w-50 bg-primary' style={{ height: '1px' }}>
                </div>
            </div>
            {errorElement}

            <button onClick={() => signInWithGoogle()} className="btn btn-info w-100"> <img style={{ width: '25px' }} src={google} className='img-fluid my-auto' alt="" /> Google Sign In</button>

            <button className="btn btn-primary w-100 my-2"> <img style={{ width: '25px' }} src={facebook} className='img-fluid my-auto' alt="" /> Facebook Sign In</button>

            <button onClick={()=>signInWithGithub()} className="btn btn-light border w-100"> <img style={{ width: '25px' }} src={github} className='img-fluid my-auto' alt="" /> GitHub Sign In</button>
        </div>
    );
};

export default SocialLogin;