

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {


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
            <NavLink exact to="/signin">| Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;