import axios from "axios";

// Create an instance of Axios
const api = axios.create({
  baseURL: "http://localhost:3071",
});

// Set up the authentication interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = JSON.parse(localStorage.getItem("token"));

    // Attach the token to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);

export default api;
