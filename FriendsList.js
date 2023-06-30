import React from 'react';
import { Link } from 'react-router-dom';
import data from './userDetails.json';

const FriendsList = () => {
  const { friends } = data;

  return (
    <div>
      <h2>My Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Link to={`/friendsList/${friend.id}`}>{friend.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;