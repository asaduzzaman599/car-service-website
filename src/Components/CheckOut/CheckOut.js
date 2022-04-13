import React from 'react';
import toast from 'react-hot-toast';


const CheckOut = () => {
    return (
        <div>
            {
                toast.success('Booked Successful')
            }
            <h3 className='my-5'>Please Checkout First</h3>
        </div>
    );
};

export default CheckOut;