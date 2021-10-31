import React from 'react';
import { Card } from 'react-bootstrap';
import './JourneyGalary.css'

const JourneyGalary = () => {
    return (
        <div className="galary-container">
            <h2 className="journeygalary-title">Journey Galary</h2>
        <div className="journey-galary">
            
            <Card className="bg-dark text-white w-25">
       <Card.Img className="" src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-1-m.jpg" alt="Card image" />
         <Card.ImgOverlay>
         <Card.Title>Journeys Are Best Measured In New Friends</Card.Title>
            </Card.ImgOverlay>
      </Card>
        
        <Card className="bg-dark text-white w-25">
              <Card.Img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-4-m.jpg" alt="Card image" />
            <Card.ImgOverlay>
           <Card.Title>A Lot Of Traveling Turns You Into A Storyteller</Card.Title>
          </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white w-25">
              <Card.Img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-5-m.jpg" alt="Card image" />
            <Card.ImgOverlay>
           <Card.Title>Travel Makes One Modest And Opened To Ideas</Card.Title>
          </Card.ImgOverlay>
          </Card>
            
          <Card className="bg-dark text-white w-25">
              <Card.Img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-6-m.jpg" alt="Card image" />
            <Card.ImgOverlay>
           <Card.Title>Think Of How Things Should Be And Act Upon</Card.Title>
          </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white w-25">
              <Card.Img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-3-m.jpg" alt="Card image" />
            <Card.ImgOverlay>
           <Card.Title>Don’t Be Disappointed By The Things You Didn’t Do</Card.Title>
          </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white w-25">
              <Card.Img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-7-m.jpg" alt="Card image" />
            <Card.ImgOverlay>
           <Card.Title>Find out the true smile with lots of love.</Card.Title>
          </Card.ImgOverlay>
          </Card>
        
         </div>
    </div>
    );
};

export default JourneyGalary;