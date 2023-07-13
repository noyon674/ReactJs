import React, { useState } from "react";
import style from './form.module.css';

const Form = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePass = (e)=>{
        setPassword(e.target.value);
    }
    const submitHandle = (e)=>{
        console.log('Form submitted.')
        const userInfo = {
            Name: name,
            Email: email,
            Password: password
        };
        console.log(userInfo);
        e.preventDefault();
    }
    return(
        <div>
            <h1>Register Form</h1>
            <form action="" onSubmit={submitHandle}>
                <div className={style.formGroup}>
                    <label>Name: </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    required />
                </div>
                <div className={style.formGroup}>
                    <label>Email: </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    required />
                </div>
                <div className={style.formGroup}>
                    <label>Pass: </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePass}
                    required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Form;
