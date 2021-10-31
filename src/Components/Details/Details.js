import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { serviceId } = useParams();
     const [service, setService] =useState({});

    useEffect( () =>{
        fetch(`https://polar-springs-14470.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div className="container">
        <Row className="g-4 mx-auto p-5">
    <Col>
      <Card className="card-style">
        <Card.Img  variant="top" src={service.img} />
        <Card.Body className="service-card">
          <Card.Title className="service-title"> {service.name} </Card.Title>
          <Card.Title className="service-title"> {service.price} </Card.Title>
          <Card.Text>
          {service.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
                
            </div>
    );
};

export default Details;