import React, { useState } from "react";
import style from './form.module.css';

const Form = ()=>{

    const [User, setUser] = useState({name:'', email:'', password:''});
    const {name, email, password} = User;

    const handleChange = (e)=>{
        const fieldName = e.target.name;
        if(fieldName === 'name'){
            setUser({name:e.target.value, email, password})
        }
        else if(fieldName === 'email'){
            
        }
        else if(fieldName === 'password'){
            setUser({name, email, password:e.target.value});
        }

    }

    const submitHandler = (e)=>{
        console.log(User)
        e.preventDefault();
    }
    return(
        <div>
            <h1>Register Form</h1>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    required/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Form;
