

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gameList.css';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [categorySort, setCategorySort] = useState('all');
  const [platform, setPlatform] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_API_URL,
        params: {
          'sort-by': sortOption,
          ...(categorySort !== 'all' && { category: categorySort }),
          ...(platform !== 'all' && { platform }),
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
  }, [sortOption, categorySort, platform]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategorySortChange = (event) => {
    setCategorySort(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const categoriesTags = [
    'all',
    'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox',
    'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based',
    'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller',
    'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d',
    '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military',
    'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts',
  ];

  const platforms = ['all', 'pc', 'browser'];

  return (
    <div>
    <div className='dropdown-menus'>
      <div className="sort-dropdown">
        <label htmlFor="sortOption">Sort by:</label>
        <select id="sortOption" value={sortOption} onChange={handleSortChange}>
          
          <option value="popularity">Popularity</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="release-date">Release Date</option>
          
        </select>
      </div>
      <div className="sort-dropdown">
        <label htmlFor="categorySort">Sort by category:</label>
        <select id="categorySort" value={categorySort} onChange={handleCategorySortChange}>
          {categoriesTags.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Games' : category}
            </option>
          ))}
        </select>
      </div>
      <div className="sort-dropdown">
        <label htmlFor="platform">Sort by platform:</label>
        <select id="platform" value={platform} onChange={handlePlatformChange}>
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p === 'all' ? 'All Platforms' : p}
            </option>
          ))}
        </select>
      </div>
      </div>
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
    </div>
  );
}

export default GameList;
