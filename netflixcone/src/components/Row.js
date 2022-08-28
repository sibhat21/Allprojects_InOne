import React, { useEffect, useState } from "react";
import "./CSS/Row.css";
import axios from "../axios";

import movietrailer from "movie-trailer";
import YouTube from "react-youtube";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      let items = request.data.results;
      //   console.log(items);
      setMovies(items);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handlerClicked = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movietrailer(movie?.title || movie?.name || movie.orginal_name)
        .then((url) => {
          const urlParms = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParms.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "393",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handlerClicked(movie)}
            key={index}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
