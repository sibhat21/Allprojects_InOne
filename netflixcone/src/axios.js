import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //base One
});

// instance.get("/movie/top_rated");

export default instance;

