import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    };
    return (
        <div>
            <h3>Add Service</h3>
            <Row>
                <Col md={4} className="mx-auto">
                    <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' {...register("name", { required: true })} />
                        <input placeholder='Price' {...register("price", { required: true })} />
                        <input placeholder='Description' {...register("description", { required: true })} />
                        <input placeholder='Image URL' {...register("imgURL", { required: true })} />
                        <input type="submit" value="Add Service" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default AddService;