

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from '../../context/authContext';

function UserProfile() {
  const { Uname } = useAuthState();
  const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
  const [gameDetails, setGameDetails] = useState([]);

  useEffect(() => {
    const fetchGameDetails = async () => {
      const details = [];
      for (const gameId of savedGames) {
        try {
          const response = await axios.get(`/api/game?id=${gameId}`);
          details.push(response.data);
        } catch (error) {
          console.error('Axios Error:', error);
          details.push({ id: gameId, error: error.message });
        }
      }
      setGameDetails(details);
    };

    fetchGameDetails();
  }, [savedGames]);

  return (
    <div className="container">
      <h2>{Uname}'s Profile</h2>
      <h3>Saved Games</h3>
      <ul>
        {gameDetails.map((game) => (
          <li key={game.id}>
            Game Title: {game.title}<br />
            <img src={game.thumbnail} alt={game.title} /><br />
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              {game.game_url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
