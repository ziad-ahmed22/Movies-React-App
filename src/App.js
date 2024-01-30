import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Error from "../src/components/error/Error";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";
import PreLoader from "../src/components/loading/PreLoader";

import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Search from "../src/pages/search/Search";
import Movies from "../src/pages/movies/Movies";
import Details from "../src/pages/details/Details";
import Contatct from "../src/pages/contatct/Contatct";
import Favorite from "../src/pages/favorite/Favorite";

function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1600);
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
            <Route path="/movies/:movieId" element={<Details />} />
            <Route path="/watchlist" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contatct />} />
            <Route
              path="/*"
              element={<Error msg="Page Not Found" btn="true" code={404} />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
