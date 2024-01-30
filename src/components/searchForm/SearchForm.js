import "./searchForm.css";

export const SearchForm = ({ value, searchInputRef, onChange }) => {
  return (
    <div className="search-form py-4 bg-blue rounded mt-4">
      <form className="flex-center">
        <input
          onChange={onChange}
          value={value}
          ref={searchInputRef}
          className="py-2 my-1 mx-4 px-3 w-100 bg-dark-blue rounded text-white"
          dir="auto"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
};
