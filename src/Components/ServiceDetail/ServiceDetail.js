import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    return (
        <div className=' w-25 mx-auto my-5 p-5  shadow'>
            <h3>service Detail of : {serviceId}</h3>
            <Button variant='primary' className='my-5' onClick={()=>{
                navigate('/checkout')

            }} > Booked</Button>
        </div>
    );
};

export default ServiceDetail;