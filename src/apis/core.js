import axios from "axios";

export const SearchInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
