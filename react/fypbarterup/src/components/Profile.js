import React from 'react'
import { useState , useRef } from 'react'
import defaultImage from './profile.jpg'
import './Profile.css'
import axios from 'axios'

const Profile = () => {
  const [imageAvatar, setImageAvatar] = useState(defaultImage)
  const fileUploadRef = useRef(null)
 
  const handleClick = (event) => {
    event.preventDefault()
    fileUploadRef.current.click();
  }
  const handlChange = (e) => {
      console.log(e)
      console.log(fileUploadRef.current.files[0])
      const uploadedFile = fileUploadRef.current.files[0]
      const cacheUrl = URL.createObjectURL(uploadedFile)
      // setImageAvatar(cacheUrl)
      console.log(imageAvatar)
      const userId = localStorage.getItem("_id")
      
      axios.put('http://localhost:3001/api/userprofile',{
        userId: userId,
        profilePic: cacheUrl
      }).then((res) => {
        console.log(res)
        setImageAvatar(res.data.profilePic)
      }).catch((err) => {
        console.log(err)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <div className='img-cont'>
      <img src={imageAvatar || defaultImage} 
        alt='Default-Avatar'
        onClick={handleClick}
        />
        </div>
     
            <form onSubmit={handleSubmit}>
                <input
                  type='file'
                  id='profilePic'
                  onChange={handlChange}
                  ref={fileUploadRef} 
                  hidden
                />
                <button type='Submit'
                >Submit</button>
            </form>
      
       
      
    </div>
  )
}

export default Profile
