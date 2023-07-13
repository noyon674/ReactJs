import React, { useState } from "react";
import style from './form.module.css';

const Form = ()=>{
    const [User, setUser] = useState({name:'', email:'', password:''});
    const {name, email, password} = User;

    const handleName = (e)=>{
        setUser({name: e.target.value, email, password});
    }
    const handleEmail = (e)=>{
        setUser({name, email: e.target.value, password});
    }
    const handlePass = (e)=>{
        setUser({name, email, password: e.target.value});
    }
    const submitHandle = (e)=>{
        console.log(User);
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

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
{/*
import React, { useState } from "react";
import style from './form.module.css';

const Form = ()=>{
    const [User, setUser] = useState({name:'', email:'', password:''});
    const {name, email, password} = User;

    const submitHandle = (e)=>{
        console.log(User);
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
                    onChange={(e)=>{setUser({name: e.target.value, email, password})}}
                    required />
                </div>
                <div className={style.formGroup}>
                    <label>Email: </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=>{setUser({name, email: e.target.value, password})}}
                    required />
                </div>
                <div className={style.formGroup}>
                    <label>Pass: </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>{setUser({name, email, password: e.target.value})}}
                    required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Form;

*/}
