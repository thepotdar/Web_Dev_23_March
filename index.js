import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
/* Reset default browser styles */
body, h1, h2, h3, p, ul, li, button, input {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set default font family */
body {
  font-family: Arial, sans-serif;
}

/* Apply styles to the root element */
#root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}
/* Style header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

/* Apply styles to the main content */
main {
  width: 80%;
  max-width: 1201px;
  padding: 18px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}



header h1 {
  font-size: 22px;
}

header button {
  padding: 10px 20px;
  background-color: #017bff;
  color: #ff2;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Style footer */
footer {
  margin-top: 20px;
  text-align: center;
  f

