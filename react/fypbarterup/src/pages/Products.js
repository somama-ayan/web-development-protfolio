import React from 'react'
import { useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {

        const token = localStorage.getItem("token")
        if (!token) {
            NotificationManager.error("You need to Logg In First..!", "", 3000)
            return navigate("/home")
        }

        axios.get("http://localhost:3001/api/products", {
            headers: {
                token: token
            }
        }).then((res) => {
            console.log(res.data)
            setProducts(res.data)
        }).catch((err) => {
            console.log("axios error", err)
        })

    }, [])
    return (
        <div>
            <h1>Products</h1>
            {
                products.map((p,k) => {
                    return(
                        <h1 key={p.id}>{p.name}</h1>
                    )
                })
            }
        </div>
    )
}

export default Products
