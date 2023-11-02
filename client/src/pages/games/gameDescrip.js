

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './gameList.css';
import { useAuthState } from '../../context/authContext';

function GameDescription() {
  const { id } = useParams();
  const { isAuthenticated } = useAuthState();
  const loggedIn = isAuthenticated;

  const [game, setGame] = useState(null);
  const [savedGames, setSavedGames] = useState([]);
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

  const saveGame = () => {
    if (!loggedIn) {
      alert('Please log in to save the game.');
      return;
    }

    let updatedSavedGames;

    if (savedGames.includes(id)) {
      updatedSavedGames = savedGames.filter((gameId) => gameId !== id);
    } else {
      updatedSavedGames = [...savedGames, id];
    }
    // Save the updated list of saved games to local storage
    localStorage.setItem('savedGames', JSON.stringify(updatedSavedGames));
    setSavedGames(updatedSavedGames);
  };

  useEffect(() => {
    const storedSavedGames = JSON.parse(localStorage.getItem('savedGames') || '[]');
    setSavedGames(storedSavedGames);
  }, []);

  return (
    <div className="container">
      {error ? (
        <p>Error: {error}</p>
      ) : game ? (
        <div className="game-itemD">
          <div className="game-header">
            <h3>{game.title}</h3>
            <button
              className={`save-button ${savedGames.includes(id) ? 'saved' : ''}`}
              onClick={saveGame}
            >
              {savedGames.includes(id) ? 'Saved' : 'Save Game'}
            </button>
          </div>
          <img src={game.thumbnail} alt={game.title} />
          <div className="genreD">{game.genre}</div>
          <div className="descriptionD">{game.description}</div>
          <div className="release-dateD">Release Date: {game.release_date}</div>
          <div className="publisherD">Publisher: {game.publisher}</div>
          <div className="developerD">Developer: {game.developer}</div>
          <div className="screenshotsD">
            {game.screenshots && game.screenshots.length > 0 ? (
              game.screenshots.map((screenshot, index) => (
                <img key={screenshot.id} src={screenshot.image} alt={`Screenshot ${index + 1}`} />
              ))
            ) : (
              <p>No screenshots available.</p>
            )}
          </div>
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
