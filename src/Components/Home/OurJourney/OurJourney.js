import React from 'react';
import './OurJourney.css'

const OurJourney = () => {
    return (
        <div className="journey container">
            <div className="journey-details">
                <h2>Our Journey</h2>
                <p>Since 2009, our strong company culture and passion for our profession has 
                    resulted in our being named each year as one of the "Best Places To Work" <br />
                    in Los Angeles County. Our management is active on various travel advisory boards 
                    and committees for travel organizations, travel magazines (Afar, Travel+Leisure), <br />
                    major hotel brands, & more. </p>
            </div>
            <div className="journey-image">
                <img src="http://www.shmai.com/preview/travelco/assets/images/journey.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurJourney;