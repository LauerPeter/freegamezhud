
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState, useAuthDispatch } from '../context/authContext';
import ASCIIArt from './ascArt'; 

function Header() {
  const { isAuthenticated, Uname } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleSignOut = () => {
    // Dispatch the sign-out action
    dispatch({ type: 'SIGN_OUT' });
    // Remove the authentication state from localStorage
    localStorage.removeItem('authState');
    window.location.href = '/gamelist';
  };

  return (
    <header>
      <ASCIIArt />
      <nav>
        <ul>
          <li>
            <NavLink exact to="/gamelist">
              Game List
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <NavLink exact to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <h2 className="sign-outBtn" onClick={handleSignOut}>
                  Sign Out
                </h2>
              </li>
            </>
          ) : (
            <li>
              <NavLink exact to="/signin">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className="header-right">
        <h1>FreeGamezHud</h1>
        {isAuthenticated && (
          <div className="welcome-text">Welcome, {Uname}</div>
        )}
      </div>
    </header>
  );
}



export default Header;



/* 


    ________________  __________  __________    ____________      ___    _______    __________________________   ____    ____ ___     ___ ___
   / ______/  __   / /  _______/ /  _______/   /  _________ \    /   \   | |  \ \  / / |  _________/_____    /   |  |    |  ||  |    |  ||   \
  / /_____/  |__| / /  /        /  /          | /         \_|   / __  \  | |   \ \/ /  |  |             /   /    |  |    |  ||  |    |  ||    \
 / _____/ _______/ /  /______  /  /______     | |   _________  / /  \  \ | |    \  /   |  |_________   /   /     |  |____|  ||  |    |  ||  _  \
/ /     /  /\  \  /   ______/ /   ______/     | |   |_______ |/ /____\  \| |     \/    |   ________/  /   /      |   ____   ||  |    |  || |_|  |
 /     /  /  \  \/  /_______ /  /______       |  \_________| | /      \  \ |           |  |_________ /   /______ |  |    |  ||  |____|  ||      /
/     /__/    \__\ /_______//_________/       \____________| |/        \__\|           |___________/___________/ |__|    |__||__________||____ /
                                                           |_|

                                                           

*/