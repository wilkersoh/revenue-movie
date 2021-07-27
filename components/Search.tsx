import { useRouter } from "next/router";

const Search: React.FC = () => {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.name.value;
    router.push(`/search?keyword=${value}`);
  }

  return (
    <div className='mr-4'>
      <div className="search-box">
        <form onSubmit={onSubmit}>
          <input type="text" name="name" spellCheck={false} autoComplete="off" placeholder="Quick Search for movies" />
        </form>
      </div>
    </div>
  );
};

export default Search;
