

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
            <NavLink exact to="/Home">| Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/GameList">| Game List</NavLink>
          </li>
          <li>
            <NavLink exact to="/">| tab3</NavLink>
          </li>
          <li>
            <NavLink exact to="/signIn">| Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;