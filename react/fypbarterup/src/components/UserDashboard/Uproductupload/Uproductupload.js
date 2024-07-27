import React from 'react'
import { useState, useRef } from 'react'
import dummyImage from '../profile.jpg'
import './Uproductupload.css'
const Uproductupload = () => {
    // pName, pCategory, pDescription, pImageUrl, userId , pId by default from db
    const [pName, setPName] = useState('')
    const [pCategory, setPCategory] = useState('')
    const [pDescription, setPDescription] = useState('')
    const [pImageUrl, setPImageUrl] = useState('')

    const productUploadRef = useRef()

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
        const prdouctImage = productUploadRef.current.files[0]
        
        const formData = new FormData()
        formData.append('productImage', prdouctImage)
        formData.append("userId", userId)
        formData.append("ProductName", pName)
        formData.append("productCategory", pCategory)
        formData.append("productDescription", pDescription)

        console.log(...formData)
    }
    return (
        <div>
            <h2>Upload a Product</h2>
            <div className='productUpload-div container d-flex justify-content-center align-items-center'>
                <div className='col-md'>
                    <form onSubmit={handleSubmit}className='form'>
                        <input
                            className='form-control'
                            type='file'
                            onChange={handleChange}
                            ref={productUploadRef}
                            hidden
                        />
                        <div className='pUploadImage input-field mb-3 d-flex align-items-center'>
                            <img
                                className='img img-thumbnail p-2 form-control'
                                src={pImageUrl || dummyImage} alt='product-image'
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
