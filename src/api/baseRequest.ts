import axios from "axios";

const baseRequest = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseRequest;
