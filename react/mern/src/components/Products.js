import React from 'react'
import { useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import {Table} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import './Products.css'

const Products = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return NotificationManager.error("You need to login first", "", 3000)

        axios.get("http://localhost:3001/api/products", {
            headers: {
                token: token
            }
        })
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
                console.log(Products)
            })
            .catch((er) => {
                NotificationManager.error("You need to login first", "", 3000)

            })

        // eslint-disable-line react-hooks/exhaustive-deps
        // eslint-disable-next-line
    }, []); // Empty dependency array means this effect runs only once on component mount

    return (
        <div>
            <h1>Product List</h1>


            <div className='contianer'>
                <div className='row'>
                    {
                        Products.map((prod, k) => {
                            return (
                                <div className='col-3 prodCards' key={k.id}>
                                    <Link to={"/product/" + prod.id}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img className="cardsImage" variant="top" src={prod.image} alt="product- image" />
                                            <Card.Body>
                                                <Card.Title className='cardsHeading'>{prod.title}</Card.Title>
                                                <Card.Text className='cardsText'><b>$ {prod.price}</b> </Card.Text>
                                                <Card.Text className='cardsDescription'>{prod.category}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div >

    )
}

export default Products
