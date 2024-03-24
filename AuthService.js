import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const AuthService = {
  login: (username, password) => {
    return axios.post(API_URL + 'login', {
      username,
      password,
    });
  },
  register: (username, email, password) => {
    return axios.post(API_URL + 'register', {
      username,
      email,
      password,
    });
  },
};

export default AuthService;

