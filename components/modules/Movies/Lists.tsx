import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/utils/urls";
import { useFilter } from "@/utils/useFilters";
import { DetailsType } from "../MovieList/interface";
import useDebounce from "@/utils/useDebounce";
import useObserver from "@/utils/useObserver";
import SkeletonImage from "@/components/elements/SkeletonImage";


export interface ListsProps {
  results: DetailsType[];
}

const Lists: React.FC<ListsProps> = ({ ...movies }) => {
  const [filteredOutID, setFilteredOutID] = useState([]);

  const { filteredMovies, search, isSearchingFilter, setIsSearchingFilter } =
    useFilter();
  const [debouncedSearchTerm, isFinished, setIsFinished] = useDebounce(
    search,
    750
  );
  const [setRef, isVisible] = useObserver({
    threshold: 0.4,
  });

  const onFilter = (searchValue) => {
    /**
     * Find matched, return [ movie id ]
     * @Object
     * 1. original_title
     * 2. title
     * 3. release_date
     * 4. overview
     */

    setIsFinished(false)

    const IDs = filteredMovies.reduce((total, current) => {
      const { original_title, overview, title, release_date, id } = current;
      const targets =
        `${original_title} ${overview} ${title} ${release_date}`.toLowerCase();

      if (targets.includes(searchValue.toLowerCase())) return [...total, id];

      return [...total];
    }, []);

    setFilteredOutID(IDs);
    return IDs;
  };
  useEffect(() => {
    if (debouncedSearchTerm) {
      const payload =  onFilter(debouncedSearchTerm);
      setIsFinished(true);
      if (search && !payload.length) {
        setIsFinished(false);
      }
    } else {
      setFilteredOutID([]);
    }

  }, [debouncedSearchTerm]);

  // No results
  if(search.length && !filteredOutID.length && !isFinished) {
    return <div>{`Please try another search...`}</div>;
  }

  // Loading
  if (search.length && !filteredOutID.length ) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4">
        {
          new Array(12).fill("").map((_, i) => (
            <SkeletonImage height="h-24 md:h-36" key={i} />
          ))
        }
      </div>
    )
  }

  return (
      <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
        {movies?.results &&
          movies.results.map((movie, i) => {
            const title = movie?.title || movie?.original_title;

            let isShow = true;
            if (debouncedSearchTerm) {
              isShow = filteredOutID.includes(movie.id) ? true : false;
            } else isShow = true;

            return (
                <li key={movie.id} className={`${!isShow ? "hidden" : ""}`}>
                  <Link href='#'>
                    <a>
                      <Image
                        src={imageUrl(movie)}
                        alt={movie.title}
                        width={680}
                        height={400}
                        layout='responsive'
                      />
                    </a>
                  </Link>
                </li>
            );
          })}
      </ul>
  );
};

export default Lists;
