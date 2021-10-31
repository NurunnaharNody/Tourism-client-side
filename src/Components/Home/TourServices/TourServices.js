import React, { useEffect, useState } from 'react';
import TourService from '../TourService/TourService';
import './TourServices.css'


const TourServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
          fetch('https://polar-springs-14470.herokuapp.com/services')
          .then(res => res.json())
          .then(data=> setServices(data));
    }, [])
    return (
        <div>
            <div className="tourservice-title">
            <h2>
                HOT TOURS
            </h2>
            </div>
            <div className="tourservices-container">
            
            {
                services.map(service => <TourService key={service._id} service ={service}></TourService>)
            }
         </div>
        </div>
    );
   
};

export default TourServices;