// IMPORT AXIOS
import axios from "axios";

// CREATE A NEW INSTANCE OF AXIOS
const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID o5PJFTUbkkYzEa2a_vDKWu7mR6vlHU4dAjxHhwCliSA",
  },
});

// EXPORT FILE TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default unsplashAPI;
