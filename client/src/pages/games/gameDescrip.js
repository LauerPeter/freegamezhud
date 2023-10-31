

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GameDescription() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/game?id=${id}`);
        setGame(response.data);
      } catch (error) {
        console.error('Axios Error:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      {error ? (
        <p>Error: {error}</p>
      ) : game ? (
        <div className="game-itemD">
          <h3>{game.title}</h3>
          <img src={game.thumbnail} alt={game.title} />
          <div className="genreD">{game.genre}</div>
          <div className="descriptionD">{game.description}</div>
          <div className="gameUrlD">
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              {game.game_url}
            </a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GameDescription;
