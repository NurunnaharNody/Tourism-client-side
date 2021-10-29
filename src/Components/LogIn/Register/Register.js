import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
            const {signInUsingGoogle, error,handleRegistration, toggleLogIn, handleEmailChange, handlePasswordChange} = useAuth();
    return (
        <div className="p-5 form">
            <br />
            <br />
            <h2>Create Account</h2>
            <br />
            <Form  onSubmit={handleRegistration}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  onChange={handleEmailChange}  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password" /> <br />
    <div className="row mb-3 text-danger">{error}</div>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check  onChange={toggleLogIn} type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br />
<br />
<p> Already Have an account? <Link to="/login"> Log In </Link>  </p>
 <div>-------OR------</div>
 <br />
 <Button onClick={signInUsingGoogle}  className="btn btn-primary m-2">Google Sign-In</Button>
        </div>
    );
        
};

export default Register;