import React from 'react'
import { useEffect } from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate  } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!token){
            NotificationManager.warning("Already Logged Out!", "Log Out", 5000)
            navigate('/home')
        }else{
            localStorage.removeItem("token")
            localStorage.removeItem("_id")
            NotificationManager.success("Successfully Logged Out", "Logged Out", 5000)
            navigate('/home')
        }
    },[])
    return (
        <div>

        </div>
    )
}

export default Logout
