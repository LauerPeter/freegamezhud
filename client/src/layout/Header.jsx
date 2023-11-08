
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState, useAuthDispatch } from '../context/authContext';
import ASCIIArt from './ascArt'; 

function Header() {
  const { isAuthenticated, Uname } = useAuthState();
  const dispatch = useAuthDispatch();
  console.log('isAuthenticated:', isAuthenticated);

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
          <li>
            {isAuthenticated ? (
              <>
                <NavLink exact to="/profile">
                   Profile
                </NavLink>
                <span className="welcome-text"> | Welcome, {Uname} |</span>
                <span>
                  {' '}
                  <button className="sign-outBtn" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </span>
              </>
            ) : (
              <NavLink exact to="/signin"> Login</NavLink>
            )}
          </li>
        </ul>
      </nav>
      <h1>FreeGamezHud</h1>
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