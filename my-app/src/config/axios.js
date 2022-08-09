import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: { "X-Custom-Header": "ccs72" },
  timeout: 2000,
});
