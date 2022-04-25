import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, price, name, img, description } = service;
    const navigate = useNavigate()
    return (
        <Col md={3} lg={4}>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{description}
                        <Button variant='primary' onClick={() => navigate(`/service/${_id}`)}> Detail</Button>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;