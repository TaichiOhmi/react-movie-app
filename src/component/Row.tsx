import React from "react";
import axios from "../axios/axios";
import "../styles/Row.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const checkImage = (movie: Movie, isLargeRow?: boolean) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const path = isLargeRow
      ? movie.poster_path || movie.backdrop_path
      : movie.backdrop_path || movie.poster_path;
    return `${base_url}${path}`;
  };

  if (movies.length == 0) {
    return <div></div>;
  }

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={checkImage(movie, isLargeRow)}
            alt={movie.name}
            onError={() =>
              console.log("画像を取得できませんでした。", movie.name)
            }
          />
        ))}
      </div>
    </div>
  );
};
