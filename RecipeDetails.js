import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <h3>Nutritional Facts:</h3>
      <ul>
        {Object.entries(recipe.totalNutrients).map(([key, value]) => (
          <li key={key}>{value.label}: {value.quantity} {value.unit}</li>
        ))}
      </ul>
      <h3>Preparation Steps:</h3>
      <ol>
        {recipe.digest.map((step, index) => (
          <li key={index}>{step.label}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;

