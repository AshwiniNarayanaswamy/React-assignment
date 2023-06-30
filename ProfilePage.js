import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import data from './userDetails.json';

const ProfilePage = () => {
  const { profile } = data;

  return (
    <div>
      <h2>My Profile</h2>
      <Link to="/profile">View Profile</Link>

      <Route path="/profile" exact>
        <Profile profile={profile} />
      </Route>
    </div>
  );
};

export default ProfilePage;