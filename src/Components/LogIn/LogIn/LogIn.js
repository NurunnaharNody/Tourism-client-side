import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const {signInUsingGoogle, handlePasswordChange, handleRegistration, handleEmailChange, } = useAuth();
    const location =useLocation();
          const history = useHistory();
          const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin =() =>{
    signInUsingGoogle()
    .then(result => {
        history.push(redirect_url)
    } )
    }
    return (
        <div className="p-5 form">
            <br/>
            <br/>
            <h2>Please Login</h2>
            <br/>
            <Form onSubmit={handleRegistration}>
           <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
            <Form.Control   onChange={handleEmailChange}   type="email" placeholder="Enter email" />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
               <Form.Label>Password</Form.Label>
             <Form.Control   onBlur={handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                  </Button>
            </Form>
             <br/>   
             <p>
                 Are you new here? <Link to="/register">Create Account</Link>
                  </p>        
                  <div>--------OR--------</div>
                  <br />
            <button onClick={handleGoogleLogin} className="btn m-2 btn-primary">Google Sign In</button>

        </div>
    );
};

export default LogIn;