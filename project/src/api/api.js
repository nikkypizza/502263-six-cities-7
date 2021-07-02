import axios from 'axios';

const APIRoute = {
  ADS: '/hotels',
};

const API_SETUP = {
  method: 'get',
  baseURL: 'https://7.react.pages.academy/six-cities',
  timeout: 5000,
};

const createApi = () => {
  const api = axios.create(API_SETUP);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export {
  createApi,
  APIRoute
};
