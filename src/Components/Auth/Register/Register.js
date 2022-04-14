import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import useFirebase from '../../../useFirebase';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
const Register = () => {

    const [checked,setChecked] = useState(false)
    const { user, userCreateWithEmailAndPassword,loading } = useFirebase()
    const navigate = useNavigate()
    if(user){
        
        {toast.success('User Scuccessfully Created')}
        navigate('/home')
    }
    if(loading){
        return <Loading></Loading>
    }
    const handleForm =  (event) => {
        event.preventDefault()
        const username = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        if (email && password.length > 5) {

             userCreateWithEmailAndPassword(email, password,username)
        }
    }
    return (
        <div onSubmit={handleForm} className=' mx-auto my-5 shadow py-4 register-form-container p-5' >
            <h3>Please Register</h3>
            <form className='d-flex flex-column mx-auto py-5'>
                <input type="text" name='name' placeholder='Username' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
               <p> <input type="checkbox" name="checkbox" id="check" onChange={()=>setChecked(!checked)}  /> <label htmlFor="check" className={checked?"text-primary":''}> Accept our terms and conditions</label></p>
                <input className='btn btn-primary rounded-pill px-4' type="submit" value="Register" disabled={checked?false:true} />
            </form>
            <p>Already have an account? <Link to='/login'>Please LogIn</Link></p>

            {
                checked && <SocialLogin from={'/'}></SocialLogin>
            }
        </div>
    );
};

export default Register;