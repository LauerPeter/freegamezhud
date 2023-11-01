

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState } from '../context/authContext';

function Header() {

  const { isAuthenticated, Uname } = useAuthState();
  console.log('isAuthenticated:', isAuthenticated);
  console.log('Uname:', Uname);
  
  return (
    <header>
      <nav>
        <h1>The Website</h1>
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
                <span>| Welcome, {Uname}</span>
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
