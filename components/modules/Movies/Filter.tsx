import { useFilter } from "@/utils/useFilters";
import React from "react";

const Filter = ({ category }) => {
  const { onSearch } = useFilter();

  return (
    <div className='text-black'>
      <input
        type='text'
        onChange={onSearch}
        className='focus:outline-none focus:border-0 py-1 px-2 rounded-sm'
        placeholder={`Filter below ${category} movies`}
      />
    </div>
  );
};

export default Filter;
