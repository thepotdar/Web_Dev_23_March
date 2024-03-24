import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Food Recipe Explorer</h1>
      <p>Welcome to Food Recipe Explorer! This application allows you to search for various food recipes, explore ingredients, nutritional information, and cooking instructions.</p>
      <p>Get started by logging in or registering to access all features.</p>
      <h2>Features:</h2>
      <ul>
        <li>User Authentication: Sign in or register to access personalized features like saving favorite recipes and viewing search history.</li>
        <li>Recipe Search: Search for recipes based on ingredients, cuisine type, or dietary restrictions using the Edamam API.</li>
        <li>Recipe Details: View detailed information about each recipe, including ingredients, nutritional facts, and cooking instructions.</li>
        <li>User Dashboard: After logging in, users can access a dashboard displaying their search history and favorite recipes.</li>
        <li>Responsive Design: Enjoy a seamless experience across various devices, including desktops, tablets, and mobile phones.</li>
      </ul>
      
    </div>
  );
};

export default Home;

