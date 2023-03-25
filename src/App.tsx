import "./styles/App.css";
import { Row } from "./component/Row";
import { requests } from "./axios/requests";
import { Banner } from "./component/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feachTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feachActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feachComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feachHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feachRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feachDocumentMovies} />
    </div>
  );
}

export default App;
