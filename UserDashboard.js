import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = ({ username }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Fetch user's search history
    axios.get(`API_URL/searchHistory?username=${username}`)
      .then(response => {
        setSearchHistory(response.data);
      })
      .catch(error => {
        console.error('Error fetching search history:', error);
      });

    // Fetch user's favorite recipes
    axios.get(`API_URL/favoriteRecipes?username=${username}`)
      .then(response => {
        setFavoriteRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorite recipes:', error);
      });
  }, [username]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Search History:</h3>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item.query}</li>
        ))}
      </ul>
      <h3>Favorite Recipes:</h3>
      <ul>
        {favoriteRecipes.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;

