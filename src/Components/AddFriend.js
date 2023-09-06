import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';




const AddFriend = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "", 
        age:"", 
        email: ""
    });
    

    const onChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token"); 
        axios.post(`http://localhost:9000/api/friends`, form, {
            headers: {
                authorization: token,
            },
        })
        .then(() => {
            navigate("/friends");
        })
        .catch(err => {
            console.log(err);
        })
    }
  
    return (
        <div>
            <h2>AddFriend</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input onChange={onChange} name="name" id="name"></input>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input onChange={onChange} name="age" id="age"></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} name="email" id="email"></input>
                </div>
                <button >Submit</button>
            </form>
        </div>
    )


}

export default AddFriend; 