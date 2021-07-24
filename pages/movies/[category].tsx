import { useState, useEffect, useRef } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import useSwr from "swr";
import useObserver from "@/utils/useObserver";
import Container from "@/components/Container";
import App from "@/components/layouts/index";
import SkeletonImage from "@/components/elements/SkeletonImage";
import Lists from "@/components/modules/Movies/Lists";

/**
 * Add filter in this page
 * Add pagination
 */

function Page({ currentPage, category }) {
  const { data } = useSwr(
    `/${category}?api_key=${process.env.TMDB_MOVIE_KEY}&page=${currentPage}`
  );

  // ... handle loading and error states
  console.log(`data`, data)
  if (!data) {
    return (
      <>
        {/* {
          currentPage === 2 ?
          <div className='py-4 h-4 w-32 bg-gray-200 animate-pulse rounded-sm md:rounded-md animate-pulse mb-4'></div>
          : null
        } */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
          {new Array(20).fill("").map((_, i) => (
            <SkeletonImage key={i} />
          ))}
        </div>
      </>
    );
  }

  return <Lists {...data} />;
}

const index = ({ category }) => {
  const [pageCount, setPageCount] = useState(2); // @default pageIndex start from : 2
  const [setRef, isVisible] = useObserver({
    threshold: 0.4,
  });

  const pages = [];

  for (let i = 2; i <= pageCount; i++) {
    /**
     * @default start from page 2
     */
    pages.push(<Page currentPage={i} category={category} key={i} />);
  }

  return (
    <App>
      <Container>
        <h1 className='capitalize text-lg font-black py-4'>{category}</h1>

        <div>{pages}</div>

        <div className='mt-4 h-12 relative' ref={setRef as any}>
          <div
            onClick={() => setPageCount(pageCount + 1)}
            className={`py-2 px-4 text-center transition-all duration-700 ease-linear absolute inset-x-0 shadow-xl left-1/2 transform -translate-x-1/2  rounded-md  ${
              isVisible ? "opacity-1 bottom-0 border-2 border-yellow-500" : "-bottom-40 opacity-0"
            }`}>
            <p>Load more</p>
          </div>
        </div>
      </Container>
    </App>
  );
};

export const getStaticPaths: GetStaticPaths<{ category: string }> =
  async () => {
    return {
      paths: [], //indicates that no page needs be created at build time
      fallback: "blocking", //indicates the type of fallback
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const res = await fetch(`${API_URL}/${params.category}?api_key=${process.env.TMDB_MOVIE_KEY}`,)
  // const movies = await res.json();

  return {
    props: {
      // initialMovies: movies,
      category: params.category,
    },
  };
};

export default index;
