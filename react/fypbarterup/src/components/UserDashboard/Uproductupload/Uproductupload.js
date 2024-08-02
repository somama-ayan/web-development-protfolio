import React from 'react'
import { useState, useRef } from 'react'
import * as yup from 'yup'
import dummyImage from '../profile.jpg'
import './Uproductupload.css'
import axios from 'axios'
import {NotificationManager} from 'react-notifications'

const Uproductupload = () => {
    // pName, pCategory, pDescription, pImageUrl, userId , pId by default from db
    const [pName, setPName] = useState('')
    const [pCategory, setPCategory] = useState('')
    const [pDescription, setPDescription] = useState('')
    const [pImageUrl, setPImageUrl] = useState('')
    const productUploadRef = useRef()

    //////////////// validation schema /////////////
    const validationSchema = yup.object({
        pName: yup
            .string()
            .required("Product Name is required..!"),
        pCategory: yup
            .string()
            .required("Product Category is required..!"),
        pDescription: yup
            .string()
            .required('Product Description is required ..!'),
        pImageUrl: yup
            .string()
            .required('Product Image is required ..!')
    })

    const handleClick = (e) => {
        productUploadRef.current.click()
    }
    const handleChange = (e) => {
        console.log(productUploadRef.current.files[0])
        const cacheurl = URL.createObjectURL(productUploadRef.current.files[0])
        setPImageUrl(cacheurl)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = localStorage.getItem("_id")
        const token = localStorage.getItem('token')
        const prdouctImage = productUploadRef.current.files[0]
        const data = {pName, pCategory, pDescription, pImageUrl}
        validationSchema.validate(data)
            .then((valid) => {
                const formData = new FormData()
                formData.append('productImage', prdouctImage)
                formData.append("userId", userId)
                formData.append("ProductName", pName)
                formData.append("ProductCategory", pCategory)
                formData.append("ProductDescription", pDescription)
                console.log(...formData)
                console.log('Data is valid')

                axios.post('http://localhost:3001/api/products', formData, {
                    headers: {
                        token: token
                    }
                }).then((res) =>  {
                    console.log(res)
                    NotificationManager.success("Success", "Product Uploaded Successfully", 3000)
                    setPName('')
                    setPCategory('')
                    setPDescription('')
                    setPImageUrl(dummyImage)
                }).catch((error) => {
                    console.log("axios error", error)
                })
            }).catch((err) => {
                console.log("validation Error", err)
            })
    }
    return (
        <div>
            <h2 className='text-center mt-3 p-3'>Upload a Product</h2>
            <div className='productUpload-div container d-flex justify-content-center align-items-center'>
                <div className='col-md'>
                    <form onSubmit={handleSubmit} className='form'>
                        <input
                            className='form-control'
                            type='file'
                            onChange={handleChange}
                            ref={productUploadRef}
                            hidden
                        />
                        <div className='input-field mb-3 d-flex align-items-center'>
                            <img
                                className='pUploadImage img img-thumbnail p-2 form-control'
                                src={pImageUrl || dummyImage} alt='product'
                                onClick={handleClick}
                            />
                        </div>
                        <div className='input-field mb-3 d-flex align-items-center'>
                            <input
                                className='p-2 form-control'
                                type='text'
                                value={pName}
                                onChange={(e) => setPName(e.target.value)}
                                placeholder='Enter Product Name...!'
                            />
                        </div>
                        <div className='input-field mb-3 d-flex align-items-center'>
                            <input
                                className='p-2 form-control'
                                type='text'
                                value={pCategory}
                                onChange={(e) => setPCategory(e.target.value)}
                                placeholder='Enter Product Category...!'
                            />
                        </div>
                        <div className='input-field mb-3 d-flex align-items-center'>
                            <textarea
                                className='p-2 form-control'
                                type='text'
                                rows='5'
                                cols='30'
                                value={pDescription}
                                onChange={(e) => setPDescription(e.target.value)}
                                placeholder='Enter Product Description...!'
                            />
                        </div>
                        <button className='btn btn-outline-dark form-control m-2'>Upload a Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Uproductupload
