import axios from "axios";
// import Router from 'next/router';
// import { logout } from './authService';

axios.defaults.baseURL = process.env.API_BASE_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (error.response?.status === 401) {
    // logout();
    // Router.push('/login');
  }
  if (!expectedError) {
    // eslint-disable-next-line no-console
    console.error("Unexpected error: ", error);
  }
  return Promise.reject(error);
});

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  option: axios,
  setToken,
};

export default http;
