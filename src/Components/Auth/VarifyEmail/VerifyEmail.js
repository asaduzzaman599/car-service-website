import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';




const VerifyEmail = () => {

    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
      );

    const sandVarifyEmail = ()=>{
        sendEmailVerification()
        toast("Mail sent")
    }
    return (
        <div>
            <h3>Please verified your email.</h3>
            <button onClick={sandVarifyEmail} className='btn btn-primary'>Sand Varification Email Again</button>
        </div>
    );
};

export default VerifyEmail;