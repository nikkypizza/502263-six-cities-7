import axios from 'axios';

const API_SETUP = {
  method: 'get',
  baseURL: 'https://7.react.pages.academy/six-cities',
  timeout: 5000,
  headers: {
    'X-Token': localStorage.token || '',
  },
};

const createApi = () => {
  const api = axios.create(API_SETUP);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    throw error;
  };

  api.interceptors.request.use((config) => {
    config.headers['X-Token'] = localStorage.token;
    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export {
  createApi
};
