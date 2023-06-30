import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import FriendsList from './FriendsList';
import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/friendsList">My Friends</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/friendsList" component={FriendsList} />
        <Route path="/friendsList/:id" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;