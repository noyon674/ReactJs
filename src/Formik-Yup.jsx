import React from "react";
import * as yup from 'yup';
import {useFormik} from 'formik';

const ErrorDesing = {
    color: 'red'
}

const SignUp = ()=>{
    const formik = useFormik({
        initialValues:{
            name:'',
            email: '',
        },
        validationSchema: yup.object({
            name: yup.string().min(4, 'Name must have 4 characters').required(),
            email:yup.string().email().required()
        }),
        onSubmit:(values, {resetForm})=>{
            console.log(values);
            resetForm(values='');
        }
    });

    return(
        <div style={{textAlign:'center'}}>
            <br /><h1>Formik & Yup</h1> <br />
            <form action="" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange} 
                     /> <br />
                    {formik.touched.name && formik.errors.name && <span style={ErrorDesing}>{formik.errors.name}</span>}
                </div> <br />
                 <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                     /> <br />
                    {formik.touched.email && formik.errors.email && <span style={ErrorDesing}>{formik.errors.email}</span>}
                </div> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp;
