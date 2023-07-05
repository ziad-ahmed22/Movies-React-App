import { Container } from "react-bootstrap";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../store/slices/searchSlice";
import SearchList from "./SearchList";
import { useEffect, useRef, useState } from "react";
import Pagination from "../pagination/Pagination";

const Search = () => {
  const searchInput = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);
  const [text, setText] = useState(
    sessionStorage.getItem("searchText")
      ? sessionStorage.getItem("searchText")
      : ""
  );

  const handelSearch = (e) => {
    setText(e.target.value);
    dispatch(fetchSearchMovies({ word: e.target.value }));
    sessionStorage.setItem("searchText", e.target.value);
  };

  // Pagination
  const pageCount = state.total_pages;
  const handlePageClick = ({ selected }) => {
    dispatch(fetchSearchMovies({ word: text, num: selected + 1 }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    searchInput.current.focus();
    text !== "" && dispatch(fetchSearchMovies({ word: text }));
  }, []);

  return (
    <div className="movies bg-dark-blue">
      <Container>
        <div className="search py-4 bg-blue rounded mt-4">
          <form className="flex-center">
            <input
              onChange={handelSearch}
              value={text}
              ref={searchInput}
              className="py-2 my-1 mx-4 px-3 w-100 bg-dark-blue rounded text-white"
              dir="auto"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>

        {text ? (
          <SearchList />
        ) : (
          <h3 className="text-center text-white py-5">
            Search For Your Favorite Movie
          </h3>
        )}

        {state.data.length && !state.error && (
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        )}
      </Container>
    </div>
  );
};

export default Search;
