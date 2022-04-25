import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:4000/service/${serviceId}`
        axios.get(url)
            .then(({ data }) => {
                setService(data)
            })
    }, [])
    return (
        <div className=' w-25 mx-auto my-5 p-5  shadow'>
            <h3>service Detail of : {service.name}</h3>
            <Button variant='primary' className='my-5' onClick={() => {
                navigate(`/checkout/${serviceId}`)

            }} > Booked</Button>
        </div>
    );
};

export default ServiceDetail;