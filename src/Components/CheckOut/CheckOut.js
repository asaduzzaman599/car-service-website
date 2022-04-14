import React, { useEffect } from 'react';
import toast from 'react-hot-toast';


const CheckOut = () => {
    useEffect(()=>{
    toast.success('Booked Successful')
    },[])
    return (
        <div>
           
            <h3 className='my-5'>Please Checkout First</h3>
        </div>
    );
};

export default CheckOut;