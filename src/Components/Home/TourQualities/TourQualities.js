import React from 'react';
import { Card } from 'react-bootstrap';
import './TourQualities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCaretSquareUp, faParagraph, faTags, faUmbrella, faUser } from '@fortawesome/free-solid-svg-icons';

const TourQualities = () => {
    return (
       <div className="qualities-card">
  
    <div className="quality-card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}} icon={faCaretSquareUp}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">Personalized Matching</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot from guests when describing 
      the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
    </div>
       <div className="quality-card">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}}  icon={faTags}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">Wide Variety Of Destinations</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot 
      from guests when describing the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
       </div>
          <div className="quality-card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}}  icon={faBox}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">Highly Qualified Service</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot from guests 
      when describing the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
          </div>

          <div className="quality-card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}}  icon={faParagraph}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">Handpicked Hotels</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot from guests when describing
       the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
          </div>
          <div className="quality-card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}}  icon={faUmbrella}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">Best Price Guarantee</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot from guests 
      when describing the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
          </div>

          <div className="quality-card">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <FontAwesomeIcon style={{width:'30px', height:'30px',margin:'10px'}}  icon={faUser}  ></FontAwesomeIcon>
      <Card.Title className="quality-title">24/7 Support</Card.Title>
      <Card.Text className="quality-text">
      The word fantastic comes up a lot from guests when
       describing the Travel which was once home to our family.
      </Card.Text>
     </Card.Body>
    </Card>
          </div>
       </div>
    );
};

export default TourQualities;