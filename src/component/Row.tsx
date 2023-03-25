import React from "react";
import axios from "../axios/axios";
import YouTube from "react-youtube";
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

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [trailerId, setTrailerId] = React.useState<string | null>("");

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

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

  const handleClick = async (movie: Movie) => {
    if (trailerId) {
      setTrailerId("");
    } else {
      let trailerId = await axios.get(
        `/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      setTrailerId(trailerId.data.results[0]?.key);
    }
  };

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
            onClick={() => handleClick(movie)}
            onError={() =>
              console.log("画像を取得できませんでした。", movie.name)
            }
          />
        ))}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
};
