import { imageUrl } from "@/utils/urls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DetailsType } from "../MovieList/interface";

export interface ListsProps {
  results: DetailsType[];
}

const Lists: React.FC<ListsProps> = ({ ...movies }) => {
  return (
    <ul className='flex overflow-x-auto -mx-4 md:-mx-16'>
      {movies?.results &&
        movies.results.map((movie, i) => {
          const title = movie?.title || movie?.original_title;

          return (
            <li key={movie.id} className='flex-shrink-0 w-60 md:w-80'>
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
    // <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
    //   {movies?.results &&
    //     movies.results.map((movie, i) =>
    //     {
    //       const title = movie?.title || movie?.original_title;

    //       return (
    //         <li key={movie.id}>
    //           <Link href='#'>
    //             <a>
    //               <Image
    //                 src={imageUrl(movie)}
    //                 alt={movie.title}
    //                 width={680}
    //                 height={400}
    //                 layout='responsive'
    //               />
    //             </a>
    //           </Link>
    //         </li>
    //       )})}
    // </ul>
  );
};

export default Lists;
