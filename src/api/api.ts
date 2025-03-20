import axios from "axios";

// create Axios instance
const Api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api", 
  withCredentials: true, // enable cookies for authentication if needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
