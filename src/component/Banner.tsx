import React from "react";
import axios from "../axios/axios";
import { requests } from "../axios/requests";
import "../styles/Banner.scss";

type movieProps = {
  title: string;
  name: string;
  orignal_name: string;
  backdrop_path: string;
  overview: string;
};

export const Banner = () => {
  const [movie, setMovie] = React.useState<movieProps>({
    title: "",
    name: "",
    orignal_name: "",
    backdrop_path: "",
    overview: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.feachNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomIndex]);
    };
    fetchData();
  }, []);

  const truncate = (str: string, n: number) => {
    if (str !== undefined) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  };
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
          : "",
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};
