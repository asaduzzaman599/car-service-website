import { async } from '@firebase/util';
import axios from 'axios';
import { Toast } from 'bootstrap';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import useFirebase from '../../../useFirebase';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const { loginWIthEmailAndPassword, loading } = useFirebase()
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [user] = useAuthState(auth)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleForm = async (event) => {
        event.preventDefault()
        if (emailRef && passwordRef) {

            const res = loginWIthEmailAndPassword(emailRef.current.value, passwordRef.current.value)



        }
    }

    if (error) {
        toast.error(error)
    }

    const from = location?.state?.from?.pathname || '/';

    if (user) {
        //

        const accessToken = async () => {
            console.log(user.email)
            const { data } = await axios.post('https://car-service-asaduzzaman599.herokuapp.com/login', { email: user.email })
            console.log(data)
            localStorage.setItem('accessToken', data)
        }
        accessToken()
        navigate(from, { replace: true })
    }

    const forgetPasswordHanlde = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            if (!error) {
                toast("Please Cheak Your Email")
            }
        } else {

            toast("Enter Your Email")
        }

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='login-form-container mx-auto text-start mt-5 shadow rounded p-5'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className='rounded-pill' ref={emailRef} placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='rounded-pill' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4 w-100'>
                    Login
                </Button>
            </Form>
            <p>Don't have an account? <Button variant='link' className='text-decoration-none' onClick={() => navigate('/register')}>Regiter Now</Button></p>
            <p> <Button variant='link' className='text-decoration-none' onClick={() => forgetPasswordHanlde()}>Forget Password?</Button></p>

            <SocialLogin from={from}></SocialLogin>
        </div>
    );
};

export default Login;