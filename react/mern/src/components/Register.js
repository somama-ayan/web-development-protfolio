import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const Register = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [address, setAddress] = useState()

    const register = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3001/api/user/register", {
            name: fullName,
            email: email,
            password: password,
            address: address
        }).then(res => {
            console.log(res)
            NotificationManager.success(`user ${res.data.email} has been succesfully registered`, " " ,3000)
        }).catch((err) => {
            NotificationManager.error(err.response.data, "", 3000);
        })
        // setFullName("")
        // setEmail("")
        // setPassword("")
        // setAddress("")
    }
    return (
        <div className='contianer mt-5'>
            <h2 className='text-primary text-center p-3'>Register</h2>
            <form className='form'
                onSubmit={(e) => register(e)}
            >
                <input className='form-control input-sm m-2'
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                >
                </input>
                <input className='form-control input-sm m-2'
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                >
                </input>
                <input className='form-control input-sm m-2'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                >
                </input>
                <input className='form-control input-sm m-2'
                    type='textarea'
                    name='address'
                    placeholder='Address'
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                >
                </input>
                
                <div className='d-grid gap '>
                <button className='btn btn-primary m-2'>
                    Submit
                    </button>
                </div>
                
            </form>
        </div>
    )
}

export default Register
