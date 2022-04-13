import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts,setExperts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExperts(data.experts))
    },[])
    return (
        <Container  id='experts'>
            <h2 className='text-primary mt-5'>
                Our Experts
            </h2>

            <Row className='g-4'>
                {
                    experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>)
                }
            </Row>

            
        </Container>
    );
};

export default Experts;