import App from "@/components/layouts/index"
import { BASE_URL, KEY } from "@/utils/urls";
import { GetServerSideProps } from "next";

import MovieList from "@/components/modules/MovieList/index"
import Container from "@/components/Container";


export default function Home({ popular, trending, nowPlaying, discoverHorror, topRated }) {

  return (
    <App>
      <Container>
        {/* Popular Movies */}
        <MovieList category='popular' results={popular?.results} />
        {/* Trending */}
        <MovieList category='trending' results={trending?.results} />
        {/* now playing */}
        <MovieList category='now playing' results={nowPlaying?.results} />
        {/* horror */}
        <MovieList category='horror' results={discoverHorror?.results} />
        {/* top rated */}
        <MovieList category='top rated' results={topRated?.results} />
      </Container>
    </App>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const urls = [
    `${BASE_URL}/movie/popular?api_key=${KEY}`,
    `${BASE_URL}/trending/all/day?api_key=${KEY}&page=${getRandomInt(2, 15)}`,
    `${BASE_URL}/movie/now_playing?api_key=${KEY}&page=${getRandomInt(3, 15)}`,
    `${BASE_URL}/discover/movie?api_key=${KEY}&with_genres=27&page=${getRandomInt(
      1,
      7
    )}`,
    `${BASE_URL}/movie/top_rated?api_key=${KEY}`,
  ];

  const fetchData = async () => {
      const response = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );
      return response;
  }

  const [popular, trending, nowPlaying, discoverHorror, topRated] =
    await fetchData();

  return {
    props: {
      popular,
      trending,
      nowPlaying,
      discoverHorror,
      topRated,
    },
  };
};