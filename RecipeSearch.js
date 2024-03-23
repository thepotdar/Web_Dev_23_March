import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = ({ onRecipeSelect }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=APP_ID&app_key=APP_KEY`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeClick = (recipe) => {
    onRecipeSelect(recipe);
  };

  return (
    <div>
      <h2>Recipe Search</h2>
      <input
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index} onClick={() => handleRecipeClick(recipe.recipe)}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;

