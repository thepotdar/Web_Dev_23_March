import React, { useState } from 'react';
import Authentication from './components/Authentication';
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';
import UserDashboard from './components/UserDashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <header>
        <h1>Food Recipe App</h1>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Authentication onLogin={handleLogin} />
        )}
      </header>
      <main>
        {user ? (
          <>
            <UserDashboard />
            <RecipeSearch onRecipeSelect={handleRecipeSelect} />
          </>
        ) : (
          <p>Please login  to the  access the recipe search.</p>
        )}
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </main>
      <footer>
        <p>Footer aee  content here</p>
      </footer>
    </div>
  );
};

export default App;

