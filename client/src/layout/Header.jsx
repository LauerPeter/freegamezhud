

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState, useAuthDispatch} from '../context/authContext';

function Header() {

  const { isAuthenticated, Uname } = useAuthState();
  const dispatch = useAuthDispatch();
  console.log('isAuthenticated:', isAuthenticated);

  const handleSignOut = () => {
    // Dispatch the sign-out action
    dispatch({ type: 'SIGN_OUT' });
    // Remove the authentication state from localStorage
    localStorage.removeItem('authState');
  };

  return (
    <header>
      <nav>
        <h1>FreeGamezHud</h1>
        <ul>
          <li>
            <NavLink exact to="/home">| Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/gamelist">| Game List</NavLink>
          </li>
          <li>
          {isAuthenticated ? ( 
              <>
                <NavLink exact to="/profile">| Profile</NavLink>
                <span className="welcome-text"> | Welcome, {Uname}</span>
                <span>| <button onClick={handleSignOut}>Sign Out</button></span>
              </>
            ) : (
              <NavLink exact to="/signin">| Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
