import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import { Card } from 'react-bootstrap'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BackHand from '@mui/icons-material/BackHand';
import './styles/Product.css'
const Product = () => {
    const [product, setProduct] = useState([])
    const param = useParams()
    

    useEffect(() => {
        const pid = param.id
        console.log(pid)
        axios.get("http://localhost:3001/api/products/product/?pid=" + pid)
            .then((res) => {
                console.log(res)
                setProduct(res.data)
                console.log(product)
            }).catch((err) => {
                console.log("axios Error", err)
                NotificationManager.error(err.message, "Server Error..!", 3000)
            })
    }, [])
    return (
        <div>
            {

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center'>
                                <img
                                    className='product-image'
                                    src={`http://localhost:3001/uploadImages/products/${product.ProductImage}`}
                                    alt='product'
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <h2 className='product-head2'>{product.ProductName}</h2>
                                <h5 className='product-head5'>{product.ProductCategory}</h5>
                                <p className='product-descparah'>{product.ProductDescription}</p>
                                <Link>
                                    <button className='whatsAPP-button btn btn-outline-dark col col-4 form-control mb-2'>
                                        <WhatsAppIcon /> WhatsApp</button>
                                </Link>
                                <Link>
                                    <button className='whatsAPP-button btn btn-outline-dark col col-4 form-control mb-2'>
                                        Go Back</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            }

            {/* <Card>
                <Card.Img src={`http://localhost:3001/uploadImages/products/${product.ProductImage}`} 
                    alt='product'
                />
                <Card.Body>
                    <Card.Title>{product.ProductName}</Card.Title>
                    <Card.Text>{product.ProductCategory}</Card.Text>
                    <Card.Text>{product.ProductDescription}</Card.Text>
                </Card.Body> */}
            {/* </Card> */}
        </div >
    )
}

export default Product
