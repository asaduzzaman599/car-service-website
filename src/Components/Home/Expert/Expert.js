import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import RatingComponent from '../../Shared/RatingComponent/RatingComponent';

const Expert = ({expert}) => {
    const {name,rating,img}=expert
    return (
        <Col md={3} lg={4}>

            <Card className='d-flex' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.ImgOverlay></Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                   <RatingComponent rating={rating}></RatingComponent>
                    
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;