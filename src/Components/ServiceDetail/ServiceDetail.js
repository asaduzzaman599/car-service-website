import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div className=' w-25 mx-auto my-5 p-5  shadow'>
            <h3>service Detail of : {serviceId}</h3>
            <Button variant='primary' className='my-5' > Booked</Button>
        </div>
    );
};

export default ServiceDetail;