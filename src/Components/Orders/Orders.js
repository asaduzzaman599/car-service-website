import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:4000/order?email=${user.email}`

        axios.get(url)
            .then(({ data }) => {
                setOrders(data)
            })
    }, [])

    return (
        <div>
            <h3>Your Order : {orders.length}</h3>
        </div>
    );
};

export default Orders;