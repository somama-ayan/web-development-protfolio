import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/user/login",
    {
        email: email,
        password: password
    })
        .then((res) => {
            // console.log(res)
            // console.log(res.headers.token)
            localStorage.setItem("token" ,res.headers.token)
            navigate("/home")
            NotificationManager.success(`${email} successfully Loged In` ,"", 3000)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='contianer mt-5'>
            <h2 className='text-primary text-center p-3'>Log In</h2>
            <form className='form'
                onSubmit={(e) => login(e)}
            >
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

                <div className='d-grid gap '>
                    <button className='btn btn-primary m-2'>
                        Log In
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Login
