import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dash = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
        setBio(response.data.bio);
        setProfileImage(response.data.profileImage);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);

  const handleSave = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await axios.put(`/api/users/${userId}`, { bio, profileImage });
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <div>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <img src={profileImage} alt="Profile" />
          <p>{bio || "No bio available"}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;