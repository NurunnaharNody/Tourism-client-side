import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookingUser = () => {
    const { userId } = useParams();
     const [user, setUser] =useState({});

     useEffect( () =>{
        fetch(`https://polar-springs-14470.herokuapp.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }, [])
    return (
        <div>
            <h2> name: {user.name}</h2>
        </div>
    );
};

export default BookingUser;