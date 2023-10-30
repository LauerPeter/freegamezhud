

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gameList.css';
import { Link } from 'react-router-dom'; 

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_API_URL,
        params: {
          'sort-by': 'alphabetical',
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {games.map((game) => (
        <div className="game-item" key={game.id}>
          {game.thumbnail && (
            <Link to={`/game/${game.id}`} className="game-item-link">
              <img src={game.thumbnail} alt={game.title} />
            </Link>
          )}
          <h3 className="custom-title">{game.title}</h3>
          <div className="genre custom-genre">{game.genre}</div>
          <div className="description custom-description">{game.short_description}</div>
          <div className="gameUrl">
            <a className="custom-link" href={game.game_url} target="_blank" rel="noopener noreferrer">
              {game.game_url}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}


export default GameList;
