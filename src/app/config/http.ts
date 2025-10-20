import axios from "axios";
import Cookies from 'js-cookie'

export const BASE_URL = "https://xaliq-danaligi.uz:8000";
export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  withCredentials: true,
})

http.interceptors.response.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Cookies.get('Token')}`
    return config;
  },

  error => {
    return Promise.reject(error);
  }
)
