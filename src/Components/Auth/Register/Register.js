import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../../useFirebase';
import './Register.css'
const Register = () => {

    const { user, userCreateWithEmailAndPassword } = useFirebase()
    const navigate = useNavigate()
    if(user){
        
        {toast.success('User Scuccessfully Created')}
        navigate('/home')
    }
    const handleForm = (event) => {
        event.preventDefault()
        const username = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        if (email && password.length > 5) {

            userCreateWithEmailAndPassword(email, password)
        }
    }
    return (
        <div onSubmit={handleForm} className='w-75 mx-auto my-5 shadow py-4 register-form-container' >
            <h3>Please Register</h3>
            <form className='d-flex flex-column w-75 mx-auto py-5'>
                <input type="text" name='name' placeholder='Username' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;