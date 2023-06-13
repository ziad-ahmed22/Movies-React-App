import { Container } from "react-bootstrap";
import "./search.css";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../store/slices/searchSlice";
import SearchList from "./SearchList";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const searchInput = useRef();

  const handelSearch = (e) => {
    setText(e.target.value);
    dispatch(fetchSearchMovies({ word: e.target.value, num: 1 }));
  };

  useEffect(() => {
    searchInput.current.focus();
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
        <SearchList text={text} />
      </Container>
    </div>
  );
};

export default Search;
