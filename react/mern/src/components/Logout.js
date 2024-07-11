import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationManager } from 'react-notifications'

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            NotificationManager.error("Already Logged Out!", "", 3000)
            navigate("/home")
        } else {
            localStorage.removeItem("token")
            NotificationManager.warning("Successfully Logged Out!", "", 3000)
            navigate("/home")
        }

       

       
    }) // empty dependency array means this effect runs once on component mount

    return (
        <div>
            Logout
            
        </div>
    )
}

export default Logout
