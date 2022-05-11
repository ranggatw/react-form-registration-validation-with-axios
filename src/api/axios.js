import axios from "axios";

// Setup your API URL from backend here
export default axios.create({
  // Change this baseURL
  baseURL: "http://localhost:3500",
});
