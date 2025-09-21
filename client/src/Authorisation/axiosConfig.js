import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000') + '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('agriai_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Clear local storage and redirect to login
      localStorage.removeItem('agriai_user');
      localStorage.removeItem('agriai_token');
      localStorage.removeItem('agriai_authenticated');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;