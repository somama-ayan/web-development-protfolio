import React from 'react'
import { useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './styles/Products.css'

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
            console.log("API response data:", res.data); // Log response data
            setProducts(res.data);
            console.log("Products state after setProducts:", products);
        }).catch((err) => {
            console.log("axios error", err)
        })

    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h1>Products</h1>
                {
                    products.map((p) => {
                        return (
                            <div className='col-md-3 container d-flex justify-content-center mb-3' key={p.id}>
                                <Card className='card-element'>
                                <Link className='text-decoration-none' to={'/product/' + p._id}>
                                    <Card.Img 
                                    className='Products-img img - img-thumbnail'
                                    alt='product' 
                                    src={`http://localhost:3001/uploadImages/products/${p.ProductImage}`} />
                                    <Card.Body>
                                        <Card.Title className='text-dark'>{p.ProductName}</Card.Title>
                                        <Card.Text className=''>{p.ProductCategory}</Card.Text>
                                        <Card.Text
                                            className='description text-dark pb-2'
                                        >{p.ProductDescription}</Card.Text>
                                    </Card.Body>
                                </Link>
                                </Card>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
