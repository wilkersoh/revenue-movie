import SkeletonImage from "@/components/elements/SkeletonImage";
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
    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 first:mt-0 mt-4'>
      {movies?.results &&
        movies.results.map((movie) => (
          <li key={movie.id}>
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
        ))}
    </ul>
  );
};

export default Lists;
