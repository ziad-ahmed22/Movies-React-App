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
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {pageLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/movies/:movieId"
              element={<Details />}
            />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contatct />} />
            <Route
              path="/*"
              element={<Error msg="Page Not Found" btn="true" height={100} />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
