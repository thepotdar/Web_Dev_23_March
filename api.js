import axios from 'axios';

const API_KEY = 'api_123';

const api = axios.create({
  baseURL: 'https://developer.edamam.com/admin/applicsstions',
});

export const searchRecipes = async (query) => {
  try {
    const response = await api.get('/search', {
      params: {
        q: query,
        app_id: 'api_debug',
        app_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

