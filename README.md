Food Recipe App
Overview
The Food Recipe App is a responsive web and mobile application that allows authenticated users to search for food recipes. It integrates with the Edamam API to fetch recipe data based on user queries. Users can explore a variety of food recipes, view detailed information about recipes including ingredients, nutritional facts, and preparation steps, and manage their search history and favorite recipes through a user dashboard.

Features
User Authentication: Allows users to register and login to access the application.
Recipe Search: Enables users to search for recipes based on ingredients, cuisine type, and dietary restrictions using the Edamam API.
Recipe Details: Displays detailed information about recipes including ingredients, nutritional facts, and preparation steps.
Responsive Design: Ensures the application is fully responsive and functional on both web and mobile platforms.
User Dashboard: Provides users with a dashboard displaying their search history and favorite recipes.
Data Refresh: Implements functionality to refresh data periodically or on user request.
Mobile Specific Features: Utilizes mobile-specific features and gestures for an enhanced user experience in the mobile app.


Setup and Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd food-recipe-app
Install dependencies:

Copy code
npm install
Start the development server:

sql
Copy code
npm start



Testing
Unit tests for individual components and API integration tests can be run using the following command:

bash
Copy code
npm test
End-to-end testing can be performed manually by navigating through the application and ensuring all features work as expected.

Technologies Used
React
React Native
Edamam API
Axios
CSS
