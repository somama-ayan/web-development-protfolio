import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { NotificationManager } from 'react-notifications'
import Email from '@mui/icons-material/Email'
import Password from '@mui/icons-material/Password'
import React from 'react'
import '../pages/styles/Login.css'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (value) => {
            axios.post("http://localhost:3001/api/login",value)
            .then((res) => {
            console.log(res)
            // Log the response headers
    console.log('Response Headers:', res.headers);

    // Log the token from the response headers
    const token = res.headers.token;
    console.log('Token:', token);
            // localStorage.setItem("token", res.headers.token)
            NotificationManager.success(`user ${res.data.findUser.email} has been succesfully Loged In`, " " ,3000)
            navigate('/home')
            }).catch((err) => {
                console.log(err)
                // NotificationManager.errors(err , "Error!" , 5000)
            });
        },
        validationSchema: yup.object({
            email: yup
            .string()
            .email()
            .required(),
            password: yup
            .string()
            .min(8)
            .max(30)
            .required()
        })
    })

   


    return (
        <section className='login-section'style={{ height: '100vh' }}>
            <h1 className='text-center pb-3'>Log In</h1>
        <div className="container d-flex justify-content-center align-items-center">
            <div className='col-md-8'>
               
               
                <form onSubmit={formik.handleSubmit} className='form' autoComplete='on'>
                    <div className='input-field mb-3 d-flex align-items-center'>
                        <Email className='me-2'/>
                        <input 
                            className='form-control'
                            type='email'
                            id='inputEmail'
                            name='email'
                            placeholder='@gmail.com'
                            value={formik.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.email && formik.errors.email? (
                                <div className='error'>{formik.errors.email}</div>
                            ): null
                        }
                    </div>
                    <div className='input-field mb-3 d-flex align-content-center'>
                        <Password className='me-2'/>
                        <input 
                            className='form-control'
                            type='password'
                            id='inputPassword'
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                            value={formik.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.password && formik.errors.password? (
                                <div className='error'>{formik.errors.password}</div>
                            ): null
                        }
                    </div>
                    <div className='input-field'>
                        <button type="submit"className='btn btn-outline-dark form-control'>Sign In</button>
                    </div>
                </form>
            </div>
      </div>
        </section>
    )
}

export default Login
