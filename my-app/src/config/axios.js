import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: { "X-Custom-Header": "CCS72" },
  timeout: 2000,
});
