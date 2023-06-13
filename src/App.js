import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Watchlist from "./components/watchlist/Watchlist";
import Contatct from "./components/contatct/Contatct";
import About from "./components/about/About";
import Error from "./components/error/Error";
import Search from "./components/search/Search";
import Details from "./components/details/Details";
import { useEffect, useState } from "react";
import PreLoader from "./components/loading/PreLoader";

function App() {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2400);
  }, []);

  return (
    <>
      {pageLoading ? (
        <PreLoader />
      ) : (
        <Routes>
          <Route path="/NetflixoReactApp" element={<Home />} />
          <Route path="/NetflixoReactApp/movies" element={<Movies />} />
          <Route
            path="/NetflixoReactApp/movies/:movieId"
            element={<Details />}
          />
          <Route path="/NetflixoReactApp/watchlist" element={<Watchlist />} />
          <Route path="/NetflixoReactApp/search" element={<Search />} />
          <Route path="/NetflixoReactApp/about" element={<About />} />
          <Route path="/NetflixoReactApp/contact" element={<Contatct />} />
          <Route
            path="*"
            element={<Error msg="Page Not Found" btn="true" height={100} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
