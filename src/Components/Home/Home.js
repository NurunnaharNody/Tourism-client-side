import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import TourQualities from './TourQualities/TourQualities';
import TourServices from './TourServices/TourServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourQualities></TourQualities>
            <TourServices></TourServices>
        </div>
    );
};

export default Home;