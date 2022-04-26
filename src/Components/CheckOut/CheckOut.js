import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from '../../firebase.init';


const CheckOut = () => {

    const { serviceId } = useParams()
    const navigate = useNavigate()
    const [service, setService] = useState({})
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `https://car-service-asaduzzaman599.herokuapp.com/service/${serviceId}`
        axios.get(url)
            .then(({ data }) => {
                setService(data)
            })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        axios.post('https://car-service-asaduzzaman599.herokuapp.com/order', order)
            .then(({ data }) => {
                if (data.insertedId) {

                    toast.success('Booked Successful')
                    navigate('/orders')
                }
            })

    }
    return (
        <div>

            <h3 className='my-5'>Please Checkout First</h3>
            <Row>
                <Col md={4} className="mx-auto">
                    <form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                        <input placeholder='Name' name="name" value={user.displayName} readOnly disabled />
                        <input placeholder='Email' name="email" value={user.email} readOnly disabled />
                        <input placeholder='Price' name="service" value={service.name} readOnly disabled />
                        <input placeholder='Address' name="address" required />
                        <input placeholder='Phone' name="phone" />
                        <input type="submit" value="Add Service" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default CheckOut;