// // import React, { useEffect } from 'react'
// import { useState, useRef, useEffect, } from 'react'
// import defaultImage from './profile.jpg'
// import './Profile.css'
// import axios from 'axios'

// const Profile = () => {
//   const fileUploadRef = useRef(null)
//   const [imageAvatar, setImageAvatar] = useState(defaultImage)

//   const handleClick = (event) => {
//     event.preventDefault()
//     fileUploadRef.current.click();
//   }

//   const handleChange = (e) => {
//     console.log(e);
//     console.log(fileUploadRef.current.files[0]);
  
//     const uploadedFile = fileUploadRef.current.files[0];
//     // const cacheUrl = URL.createObjectURL(uploadedFile);
//     const userId = localStorage.getItem("_id");
    
  
//     const formData = new FormData();
//     formData.append('image', uploadedFile);
//     formData.append('userId', userId); // Add userId to formData
  
//     console.log(...formData);
  
//     axios.put('http://localhost:3001/api/userprofile', formData, {
//       headers: {
//         token: token, // Assuming you have a token
//         'Content-Type': 'multipart/form-data'  // This is set automatically, but you can include it explicitly
//       }
//     }).then((res) => {
//       console.log(res);
//       // setImageAvatar(res.data)
//     }).catch((err) => {
//       console.log(err);
//     });
//   }
  
  
//   const userId = localStorage.getItem('_id')
//   const token = localStorage.getItem("token")


//   useEffect(() => {
//     // const userId = localStorage.getItem("_id")
//     console.log(token)
//     console.log(userId)
//     axios.get("http://localhost:3001/api/userprofile/",{
//       Headers: {
//         token: token 
//       },
//       params:{
//         userId: userId
//       }
//     }
//     ).then((res) => {
//       console.log(res)
//       setImageAvatar(res.data.image)
//       console.log(imageAvatar)
//     }).catch((err) => {
//       console.log(err)
//     })
//   },[imageAvatar])
//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <div className='img-cont'>
//         <img src={`http://localhost:3001/uploadImages/userProfiles/${imageAvatar}`}
//           alt='Default-Avatar'
//           onClick={handleClick}
//         />
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type='file'
//           id='profilePic'
//           onChange={handleChange}
//           ref={fileUploadRef}
//           hidden
//         />
//         <button type='Submit'
//         >Submit</button>
//       </form>



//     </div>
//   )
// }

// export default Profile
