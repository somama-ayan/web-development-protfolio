import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import defaultImage from './profile.jpg'
import './Up.css'
import axios from 'axios'

const Up = () => {
    const [userData, setUserData] = useState({})
    const [isEditable, setIsEditable] = useState(false)
    const [name, setName] = useState()
    const [bio, setBio] = useState('No Bio Available!')
    const [userProfileImage, setUserProfileImage] = useState('')
    const [shouldFetch, setShouldFetch] = useState(true);

    const fileUploadRef = useRef(null)

    ////////// fetch data using axios.get //////////////
    useEffect(() => {

        if (!shouldFetch) return; // Prevent unnecessary fetches


        const userId = localStorage.getItem('_id')
        const token = localStorage.getItem("token")
        axios.get("http://localhost:3001/api/userprofile/", {
            headers: {
                token: token
            },
            params: {
                userId: userId
            }
        })
            .then((res) => {
                console.log(res)
                setUserData(res.data)
                setUserProfileImage(res.data.image)
                setName(res.data.name)
                setBio(res.data.bio)


            }).catch((err) => {
                console.log('Error fetching user data:', err)
            }).finally(() => {
                setShouldFetch(false); // Reset the trigger after fetching
            });
    }, [shouldFetch])



    const handleClick = (e) => {
        e.preventDefault()
        fileUploadRef.current.click()
    }
    const handleChange = (e) => {
        console.log(fileUploadRef.current.files[0]);

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const uploadFile = fileUploadRef.current.files[0]
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("_id")
        console.log(userId)
        console.log(bio)
        console.log(uploadFile)
        const formData = new FormData()
        if (uploadFile) {
            formData.append("image", uploadFile)
            formData.append("userId", userId)
            formData.append("bio", bio)
        } else {
            formData.append("image", userProfileImage)
            formData.append("userId", userId)
            formData.append("bio", bio)
        }
        console.log(...formData)

        axios.put("http://localhost:3001/api/userprofile", formData, {
            headers: {
                token: token
            }
        }).then((res) => {
            console.log(res)
            setUserData(res.data)
            setUserProfileImage(res.data.image)
            setBio(res.data.bio)
            setIsEditable(false)
        }).catch((err) => {
            console.log('Error updating user profile:', err)
        })
    }
    return (
        <div className='bg-dark container d-flex justify-content-center pt-5'>
            <div>
                {isEditable ?
                    (
                        <div className='edit-div container justify-content-center'>
                            <form onSubmit={handleSubmit}>

                                <input
                                    type='file'
                                    onChange={handleChange} // for image
                                    ref={fileUploadRef}
                                    hidden
                                />
                                <img
                                    className='eidt-div-img img img-thumbnail mb-3'
                                    src={userProfileImage === '' ? (defaultImage) : (`http://localhost:3001/uploadImages/userProfiles/${userProfileImage}`)}
                                    alt='profile'
                                    onClick={handleClick}
                                />
                                <h5 className='textarea-input text-light mb-3'>{name}</h5>
                                <textarea
                                    className='text-center mb-3'
                                    type='textarea'
                                    name='bio'
                                    id='bio'
                                    rows='5'
                                    value={bio}
                                    onChange={(e) => { setBio(e.target.value) }}
                                />
                                <button
                                    className='btn btn-outline-light form-control mb-3'
                                    type='submit'
                                >save
                                </button>
                            </form>
                        </div>
                    ) :
                    (
                        <div className='edit-div'>
                            <img
                                className='eidt-div-img img img-thumbnail mb-3'
                                src={userProfileImage === '' ? (defaultImage) : (`http://localhost:3001/uploadImages/userProfiles/${userProfileImage}`)} alt='profile'></img>
                            <h5 className='text-light mb-3'>{name}</h5>
                            <p className='text-light mb-3'>{bio}</p>
                            <button
                                className='btn btn-outline-light form-control mb-3'
                                onClick={() => setIsEditable(true)}>
                                Edit
                            </button>
                        </div>
                    )}

            </div>

        </div>
    )
}

export default Up
