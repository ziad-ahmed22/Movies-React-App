import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

import { EmptyPlaceholder } from "../../components/emptyPlaceholder/EmptyPlaceholder";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { fetchSearchMovies } from "../../store/slices/searchSlice";
import Pagination from "../../components/pagination/Pagination";
import { scrollToTop } from "../../utils/scrollToTop";
import SearchList from "./SearchList";

const Search = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const { data, loading, error, total_pages } = useSelector(
    (state) => state.search
  );

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

  const handlePageClick = ({ selected }) => {
    dispatch(fetchSearchMovies({ word: text, num: selected + 1 }));
    scrollToTop();
  };

  useEffect(() => {
    searchInputRef.current.focus();
    text !== "" && dispatch(fetchSearchMovies({ word: text }));
  }, [dispatch, text]);

  return (
    <div className="movies bg-dark-blue">
      <Container>
        <SearchForm
          value={text}
          onChange={handelSearch}
          searchInputRef={searchInputRef}
        />

        {text ? (
          <SearchList data={data} loading={loading} error={error} />
        ) : (
          <EmptyPlaceholder text="Search For Your Favorite Movie" />
        )}

        {total_pages > 1 && !error && (
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={total_pages}
          />
        )}
      </Container>
    </div>
  );
};

export default Search;
