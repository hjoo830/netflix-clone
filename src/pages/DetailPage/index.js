import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  let { movieId } = useParams();
  const [movies, setMovies] = useState({});

  const textStyle = {
    textAlign: "center",
    padding: "100px",
    color: "white",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`/movie/${movieId}`);
        setMovies(request.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error("Movie not found:", movieId);
          setMovies(null); // 영화가 없을 때 빈 값 설정
        } else {
          console.error("API Request Failed:", error);
        }
      }
    }
    fetchData();
  }, [movieId]);

  if (movies === null) return <div style={textStyle}>Movie not found</div>;
  if (!movies) return <div style={textStyle}>loading...</div>;

  return (
    <section>
      {movies.backdrop_path ? (
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt="modal__poster-img"
        />
      ) : (
        <div style={textStyle}>No image available</div>
      )}
    </section>
  );
}
