

import React from "react";
import { useAuthState } from '../../context/authContext';

function UserProfile() {
  const { Uname } = useAuthState(); 

  return (
    <div className="container">
      <h2>User Profile</h2>
      <p>Welcome, {Uname}!</p>
    </div>
  );
}

export default UserProfile;