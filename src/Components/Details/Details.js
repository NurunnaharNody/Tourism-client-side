
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { serviceId } = useParams();
     const [service, setService] =useState({});
     const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://polar-springs-14470.herokuapp.com/users', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Are you sure to place order?');
                reset();
            }
        })
    };

    useEffect( () =>{
        fetch(`https://polar-springs-14470.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div className="container">
          <div className="add-service">
            <h2>Order Review</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })}
           placeholder="Name" />
           <input {...register("email", { required: true, maxLength: 20 })}
           placeholder="Email" />
           <input {...register("address", { required: true, maxLength: 20 })}
           placeholder="Address" />
            <input type="submit" />      
    </form>
        </div>
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