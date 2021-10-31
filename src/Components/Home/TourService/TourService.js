import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TourService.css'

const TourService = ({service}) => {
    const {_id,name , price, img, description } = service;
    return (
        <div className="service-container">
<Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
    <Col>
      <Card className="card-style">
        <Card.Img variant="top" src={img} />
        <Card.Body className="service-card">
          <Card.Title className="service-title"> {name} </Card.Title>
          <Card.Title className="service-price"> {price} </Card.Title>
          <Card.Text className="service-description">
          {description}
          </Card.Text>
          <Link to={`/details/${_id}`}><Button className="button-service">Book Now</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default TourService;