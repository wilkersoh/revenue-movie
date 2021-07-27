import React from "react";
import Image from "next/image";
import { DetailsType } from "../MovieList/interface";
import { KEY, ORIGINAL_IMAGE_URL } from "@/utils/urls";
import SkeletonImage from "@/components/elements/SkeletonImage";

const Details: React.FC<DetailsType> = ({ ...details }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex w-full'>
        <p className='text-gray-400'>
          <i>{new Intl.NumberFormat("en-US").format(details.revenue)} views</i>
        </p>
        <div className='ml-auto'>
          <p className='text-yellow-400 text-2xl'>{details.vote_average}</p>
          <p className='text-gray-400 text-xs md:text-base text-right'>
            {details.adult ? "18++" : "6++"}
          </p>
        </div>
      </div>

      <div className="mt-2 mb-4 md:max-w-5xl">
        <p className="font-bold">Overview: </p>
        <span>{details.overview}</span>
      </div>

      {/* Languages */}
      <Companies companies={details.production_companies} />
    </div>
  );
};

const Companies = ({ companies }) => {
  return (
    <div className='py-4'>
      <h3 className='capitalize font-semibold underline text-lg'>
        production companies:
      </h3>
      <ul className='flex overflow-x-auto'>
        {companies ? (
          companies.map((c, i) => (
            <li
              key={i}
              className='flex-shrink-0 h-48 w-40  mr-3 relative bg-white py-4'>
              <Image
                src={`${ORIGINAL_IMAGE_URL}${c.logo_path}?api_key=${KEY}`}
                layout='responsive'
                width={200}
                height={200}
                className='object-contain w-full h-full'
              />
            </li>
          ))
        ) : (
          <>
            {new Array(3).fill("").map((_, i) => (
              <SkeletonImage key={i} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Details;
