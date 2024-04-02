// api/index.js
import axios from "axios";

// Create a client
const client = axios.create({
  baseURL: "",
});

// Define API endpoints
const endpoints = {
  users: "/users",
  user: (id) => `/users/${id}`,
};

// Export a function to call API
export const getUsers = () => client.get(endpoints.users);

export const getUser = (id) => client.get(endpoints.user(id));

// Export the client for advanced usage
export default client;