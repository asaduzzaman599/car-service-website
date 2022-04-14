
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import useFirebase from '../../../useFirebase';
import google from './../../../images/social_logo/google.png'
import github from './../../../images/social_logo/github.png'
import { useNavigate } from 'react-router-dom';
const SocialLogin = ({from}) => {
    const navigate = useNavigate()
    const {user,error,loginWIthEmailAndPassword,googleLogIn,githubLogIn} = useFirebase()

    
    if(error){
        toast.error(error)
    }

    if(user){
        navigate(from,{replace:true})
    }
   
    return (
        <div>
            <Button varient="primary" className='w-100 rounded-pill mb-2' onClick={()=>googleLogIn()} > <img src={google} height="30" alt="" className='me-4' /> LogIn with Google</Button>
            <Button varient="primary" className='w-100 rounded-pill' onClick={()=>githubLogIn()} > <img src={github} height="30" alt="" className='me-4' /> LogIn with Google</Button>
        </div>
    );
};

export default SocialLogin;