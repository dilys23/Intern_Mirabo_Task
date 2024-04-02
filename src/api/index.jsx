import axios from "axios";

const client = axios.create({
  baseURL: " ",
});

const endpoints = {
  users: "/users",
  user: (id) => `/users/${id}`,
};

client.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getUsers = () => client.get(endpoints.users);

export const getUser = (id) => client.get(endpoints.user(id));

export default client;

