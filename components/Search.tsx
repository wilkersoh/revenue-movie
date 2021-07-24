import { useRouter } from "next/router";


// Handle the json query request from a user to query photo name, description, filename and its orginal link from your data storage

const Search: React.FC = () => {
  const router = useRouter();

  const goToSearchPage = () => {
    router.push("/search");
  };

  return (
    <div className='mr-4'>
      <div className="search-box">
        <input type="text" spellCheck={false} autoComplete="off" />
      </div>
    </div>
  );
};

export default Search;
