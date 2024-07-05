import axios from 'axios';

const baseRequest = axios.create({
  baseURL: 'http://dev.trainee.dex-it.ru',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});


baseRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default baseRequest;
