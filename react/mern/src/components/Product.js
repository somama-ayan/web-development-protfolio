import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';


const Product = () => {
    const [product, setProduct] = useState([])

    const param = useParams();
    const pid = param.id
    console.log(pid)


    useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token) return console.log("not found")
    console.log(token)
    axios.get("http://localhost:3001/api/product/?pid="+ param.id ,{
        headers:{
            token: token
        }
    })
    .then(res => {
        console.log(res.data)
        setProduct(res.data)
    })
    .catch(err=> {
        console.log(err)
        NotificationManager.error({err},"",3000)
    })
    // eslint-disable-next-line
},[])
    return (
        <div>
            <card>
                <img src={product.image} width={200} height={300} alt="product-image"></img>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <hr/>
                {/* <p>{product.rating.rate}</p> */}
            </card>
        </div>
    )
}

export default Product
