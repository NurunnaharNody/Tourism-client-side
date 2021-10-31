import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <br />
            <br />
            <br />
        <div className="footer-section">
              <div className="footer-logo">
              <img
        src="https://i.ibb.co/vmpND5x/white-logo.png"
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt=""
      />
      <h3>TRAVELCO</h3>
      <Button variant="dark"> Go for Sign In </Button>
              </div>
              <div className="footer-contact">
                  <h2>00000-333333 </h2>
                  <h4>Moutain Drive , Kensigten <br />
London , United Kingdom</h4>
                  <h3>Copyright © TravelCo. All Rights Reserved</h3>
              </div>  
        </div>
        </div>
    );
};

export default Footer;