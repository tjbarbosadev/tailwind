import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:3333', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});
