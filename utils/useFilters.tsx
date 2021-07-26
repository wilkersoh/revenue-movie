import React, { useState, useContext, createContext, useEffect } from "react";

const FilterContext = createContext({});

export function ProviderFilter({children}) {
  const filter = useProviderFilter();
  return (
    <FilterContext.Provider value={filter}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  return useContext(FilterContext);
}

function useProviderFilter() {
  const [isSearchingFilter, setIsSearchingFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]); // clone data from swr

  const onSearch = (event) => {
    event.preventDefault();

    const searchValue = event.target.value;
    setSearch(searchValue);
  }

  return {
    onSearch,
    setSearch,
    search,
    setFilteredMovies,
    filteredMovies,
    setIsSearchingFilter,
    isSearchingFilter,
  };
}


