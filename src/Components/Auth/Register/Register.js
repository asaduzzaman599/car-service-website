import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const handleForm = (event) =>{
        event.preventDefault()
        const username = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        console.log(email,password)
    }
    return (
        <div onSubmit={handleForm} className='w-75 mx-auto my-5 shadow py-4 register-form-container' >
            <h3>Please Register</h3>
            <form className='d-flex flex-column w-75 mx-auto py-5'>
            <input type="text" name='name' placeholder='Username' required/>
            <input type="email" name="email" id="" placeholder='Your Email' required/>
            <input type="password" name="password" id="" placeholder='Your Password' required/>
            <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;