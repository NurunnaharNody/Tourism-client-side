import React, { useEffect, useState } from 'react';
import TourService from '../TourService/TourService';
import './TourServices.css'


const TourServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
          fetch('service.json')
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
                services.map(service => <TourService key={service.Price} service ={service}></TourService>)
            }
         </div>
        </div>
    );
   
};

export default TourServices;