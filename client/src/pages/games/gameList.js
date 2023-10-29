

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gameList.css';

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
          {game.thumbnail && <img src={game.thumbnail} alt={game.title} />}
          <h3>{game.title}</h3>
          <div className="genre">{game.genre}</div>
          <div className="description">{game.short_description}</div>
        </div>
      ))}
    </div>
  );
}

export default GameList;
