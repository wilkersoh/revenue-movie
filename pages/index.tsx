import App from "@/components/layouts/index"
import { API_URL, KEY } from "@/utils/urls";
import { GetServerSideProps } from "next";

import MovieList from "@/components/modules/MovieList/index"
import Container from "@/components/Container";


export default function Home({ popularMovies }) {

  return (
    <App>
      <Container>
        {/* Popular Movies */}
        <MovieList
          category="popular"
          total_pages={popularMovies.total_page}
          results={popularMovies.results}
        />
      </Container>
    </App>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res_popular = await fetch(
    `${API_URL}/popular?api_key=${KEY}`
  );
  const popularMovies = await res_popular.json();

  return {
    props: {
      popularMovies,
    },
  };
};