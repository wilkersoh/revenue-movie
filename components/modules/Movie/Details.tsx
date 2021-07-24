import React from "react";
import { DetailsType } from "../MovieList/interface";

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

      <div className="mt-3">
        <p className="font-bold">Overview: </p>
        <span>{details.overview}</span>
      </div>
    </div>
  );
};

export default Details;
