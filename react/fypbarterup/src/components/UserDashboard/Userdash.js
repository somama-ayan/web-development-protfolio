import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { NotificationManager } from 'react-notifications'
import Up from './Up'
import Uproductupload from './Uproductupload/Uproductupload'
const Userdash = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token'); // Adjust based on how you store your token
        if (token) {
            // Optionally verify token validity with an API call
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            NotificationManager.error("You need to LogIn First ..!", "", 3000);
            navigate('/home')
        }
    }, []);
    return (
        <div>{isAuthenticated ? (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 bg-dark'>
                        <Up />
                    </div>
                    <div className='col-md-9'>
                        <Uproductupload />
                    </div>
                </div>
            </div>
        ) : (
            <div></div>
        )
        }


        </div>
    )
}

export default Userdash
