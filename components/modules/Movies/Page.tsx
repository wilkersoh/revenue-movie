import React, { useEffect } from "react";
import SkeletonImage from "@/components/elements/SkeletonImage";
import useSWR from "swr";
import Lists from "./Lists";
import { useFilter } from "@/utils/useFilters";

const Page = ({ category, currentPage }) => {
  const { data } = useSWR(
    `/${category}?api_key=${process.env.TMDB_MOVIE_KEY}&page=${currentPage}`
  );
  const { setFilteredMovies } = useFilter();

  useEffect(() => {
    if (!data) return;

    const { results, ...rest } = data;
    setFilteredMovies((prev) => {
      return [...prev, ...results];
    });
  }, [data]);

  if (!data) {
    return (
      <>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
          {new Array(20).fill("").map((_, i) => (
            <SkeletonImage key={i} />
          ))}
        </div>
      </>
    );
  }

  return (
    <Lists {...data} />
  );
};

export default Page;
