import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
          fetch('https://polar-springs-14470.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])
    const handleDelete = id =>{
        const url = `https://polar-springs-14470.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = services.filter(service => service._id !== id)
            setServices(remaining);
            }
            
           
        })
    }
    return (
        <div>
            <div className="manageservice-title">
            <h2>Manage Services</h2>
           </div>
           
            <div className="manageservices-container">
                {
                    services.map(service => <div key={service._id}>
                        <Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
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
      <Button onClick={() => handleDelete(service._id)} className="m-3 bg-danger">Delete</Button>
    </Col>
  ))}
</Row>
                    </div>)
                }
                
            </div> 
            
        </div>
       
    );
};

export default ManageServices;