import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/service")
            .then(({ data }) => {
                setServices(data)
            })
        /*  fetch('data.json')
             .then(res => res.json())
             .then(data => setServices(data.services)) */
    }, [])
    return (
        <Container id='services'>
            <h2 className='text-primary mt-5'>Services</h2>

            <Row className='g-4'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;