import React from "react";
import Link from "next/link";
import Image from "next/image";
import MovieListProps from "./interface";
import { imageUrl } from "@/utils/urls";


const index: React.FC<MovieListProps> = ({ category, total_pages, results }) => {
  return (
    <div>
      <div className='flex items-end justify-between mb-2 md:-mx-8'>
        <h2 className='capitalize text-lg'>{category}</h2>
        <Link href={`/movies/${category}`}>
          <a className='text-xs'>
            View More <span>&#8594;</span>
          </a>
        </Link>
      </div>
      {/* List component */}
      <ListItem results={results} />
    </div>
  );
};

const ListItem = ({ results }) => {

  const dashString = (str) => {
    const result = str.split(" ").join("-").toLowerCase();
    return result;
  }

  return (
    <ul className='flex overflow-x-auto -mx-4 md:-mx-16'>
      {results.map((item) => {
        const title = item?.original_title || item?.title

        return (
          <li key={item.id} className='flex-shrink-0 w-60 md:w-80'>
            <Link href={`/movie/${dashString(title)}?id=${item.id}`}>
              <a>
                <Image
                  src={imageUrl(item)}
                  alt={item.title}
                  width={680}
                  height={400}
                  layout='responsive'
                />
              </a>
            </Link>
          </li>
        )})}
    </ul>
  );
};

export default index;
