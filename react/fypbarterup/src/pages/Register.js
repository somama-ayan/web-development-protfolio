import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import {NotificationManager} from "react-notifications"

// import isEmailValidator from 'validator/lib/isEmail';

import './styles/Register.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
// import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

const Register = () => {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [address, setAddress] = useState('')
 const [terms, setTerms] = useState(false)

 const navigate = useNavigate()
//  const [errors, setErrors] = useState({});

 const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Must be at least 3 characters')
    .max(40, "Don't exceed 40 characters"),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(30, "Don't exceed 30 characters"),
  address: yup
    .string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters')
    .max(50, "Don't exceed Address from 50 characters"),
  terms: yup
    .boolean()
    .required( 'You must accept the terms and conditions')
})

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = { name, email, password, address, terms };

        validationSchema.validate(formData)
            .then(valid => {
                console.log('Form data is valid:', valid);
                // Perform form submission logic here
                axios.post("http://localhost:3001/api/registration", valid)
                .then(res => {
                  console.log(res.data)
                  NotificationManager.success(`user ${res.data.email} has been succesfully registered`, " " ,3000)
                  navigate('/login')
              }).catch((err) => {
                  NotificationManager.error(err.response.data, "", 3000);
                  console.log(err.response.data)
              })
            })
            .catch(err => {
              NotificationManager.error(err.message, "", 3000);
              console.log(err.message)
                // const validationErrors = {};
                // err.inner.forEach(error => {
                //     validationErrors[error.path] = error.message;
                // });
                // setErrors(validationErrors);
                // console.log('Validation errors:', validationErrors);
            });
    
 }
  return (
    <section className='register-section' style={{ height: '100vh' }}>
      <h1 className='reghead1 text-center pb-3'>Register</h1>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='col-md-6'>

          <form onSubmit={(e) => handleSubmit(e)} className='form' autoComplete='on'>
            <div className='input-field mb-3 d-flex align-items-center'>
              <PersonRoundedIcon className='me-2' />
              <input
                className='form-control'
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                required
                value={name}
                onChange={e => setName(e.target.value)}
                
              />
             
            </div>

            <div className='input-field mb-3 d-flex align-items-center'>
              <EmailIcon className='me-2' />
              <input
                className='form-control'
                type='email'
                name='email'
                id='email'
                placeholder='@gmail.com'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
             
            </div>

            <div className='input-field mb-3 d-flex align-items-center'>
              <PasswordIcon className='me-2' />
              <input
                className='form-control'
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                required
                autoComplete='off'
                value={password}
                onChange={e => setPassword(e.target.value)}                
              />
              
            </div>

            <div className='input-field mb-3 d-flex align-items-center'>
              <HomeIcon className='me-2' />
              <input
                className='form-control'
                type='text'
                name='address'
                id='address'
                placeholder='Address'
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              
            </div>

            <div className='input-field mb-3 d-flex align-items-center'>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className='me-2'
                required
                checked={terms}
                onChange={e => setTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to the Terms and Conditions
              </label>
             
            </div>

            <div className='input-field'>
              <button className='btn btn-outline-dark form-control' type='submit'>
                Sign Up
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Register;
