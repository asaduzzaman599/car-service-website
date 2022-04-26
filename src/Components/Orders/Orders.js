import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import { auth } from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://car-service-asaduzzaman599.herokuapp.com/order?email=${user?.email}`

        axiosPrivate.get(url)
            .then(({ data }) => {
                setOrders(data)
            }).catch(error => {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/login')
                }
            })
    }, [user])



    return (
        <div>
            <h3>Your Order : {orders.length}</h3>
        </div>
    );
};

export default Orders;