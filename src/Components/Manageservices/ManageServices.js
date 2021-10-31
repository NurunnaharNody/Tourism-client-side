import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ManageServices.css';

const ManageServices = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
          fetch('https://polar-springs-14470.herokuapp.com/users')
          .then(res => res.json())
          .then(data => setUsers(data))
    },[])


    const handleDelete = id =>{
        const url = `https://polar-springs-14470.herokuapp.com/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
            }
            
           
        })
    }
    return (
        <div>
            <div className="manageservice-title">
            <h2>User Info</h2>
           </div>
           
            <div className="manageservices-container">
                {
                    users.map(user => <div key={user._id}>
                        <Row className="g-4 mx-auto p-5">
  {Array.from({ length:1}).map((_, idx) => (
    <Col>
      <Card className="card-style">
        <Card.Body className="service-card">
          <Card.Title className="service-title"> {user.name} </Card.Title>
          <Card.Title className="service-title"> {user.email} </Card.Title>
          <Card.Text>
          {user.address}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick={() => handleDelete(user._id)} className="m-3 bg-danger">Delete</Button>
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