import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import TourQualities from './TourQualities/TourQualities';
import TourServices from './TourServices/TourServices';
import PropagateLoader from "react-spinners/PropagateLoader";
import OurJourney from './OurJourney/OurJourney';
import JourneyGalary from './JourneyGalary/JourneyGalary';

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
       setTimeout(() => {
           setLoading(false)
       }, 3000)
    }, [])
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            {
                loading ? 
                <PropagateLoader color={"#F5A623"} loading={loading} size={40} />

                :
                <div>
                <TourQualities></TourQualities>
                <TourServices></TourServices>
                <OurJourney></OurJourney>
                <JourneyGalary></JourneyGalary>
                </div>
            }
            
        </div>
    );
};

export default Home;