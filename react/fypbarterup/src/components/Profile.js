import React from 'react'
import { useState, useRef } from 'react'
import './Profile.css'
import pImage from './profile.jpg'
import Dash from './Dash'
const Userdhashboard = () => {

  const [chImage, setChImage] = useState(null);
  const inputRef = useRef(null)

  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    console.log(e.target.files[0])
    setChImage(file)
  }
const [bio, setBio] = useState('')
  
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 sidebar'>
            <div className="img-cont" onClick={handleImageClick}>
              {
                chImage ? (<img className="img-fluid img-thumbnail pImage" src={URL.createObjectURL(chImage)} alt='profile' />) : (<img className="img-fluid img-thumbnail pImage" src={pImage} alt='profile' />)
              }
              <input
                type='file'
                ref={inputRef}
                id='choose-image'
                accept='image/*'
                onChange={handleImageChange}
                style={{ "display": "none" }}
              />
              {/* <button type='submit'>Upload</button> */}
              <h5 className='userName'> SomamaAyan</h5>
            </div>
            <div
              className='bio-cont'>
              <textarea
              style={{display: 'none'}}
                rows='3'
                cols='30'
                id='bio'
                placeholder='Add Your Bio ...'
                onChange={e => setBio(e.target.value)}
              ></textarea>
              <p>{bio}</p>
              
            </div>
          </div>



          <div className='col-md-8 profileMain'>
            <h1>hello</h1>
<Dash />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Userdhashboard
