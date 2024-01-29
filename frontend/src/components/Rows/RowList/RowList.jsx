import Row from "../Row/Row";
import requests from '../../../utils/request'
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.getNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />

      <Row title="Top Rated" fetchUrl={requests.getTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.getTvShow} />
      <Row title="Documentaries" fetchUrl={requests.getDocumentaries} />
    </>
  );
}

export default RowList