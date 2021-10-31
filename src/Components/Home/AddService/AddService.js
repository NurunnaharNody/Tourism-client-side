import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://polar-springs-14470.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h2>Add Service</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })}
           placeholder="Place Name" />
           <textarea {...register("description")} placeholder="Details"/>
           <input type="number" {...register("price")} placeholder="Price" />
           <input {...register("img")} placeholder="Img url" />
           <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;