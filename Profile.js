import React from 'react';
import { useParams } from 'react-router-dom';
import data from './userDetails.json';

const Profile = () => {
  const { id } = useParams();
  const { friends } = data;
  const friend = friends.find((friend) => friend.id === parseInt(id));

  if (!friend) {
    return <div>Friend not found.</div>;
  }

  const { name, image, email, mobile, address, occupation } = friend;

  return (
    <div>
      <h2>Profile</h2>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>Address: {address}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default Profile;
