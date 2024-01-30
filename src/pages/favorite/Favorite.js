import { scrollToTop } from "../../utils/scrollToTop";
import HeaderC from "../../components/header/HeaderC";
import FavoriteList from "./FavoriteList";
import { useEffect } from "react";

const Favorite = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="favorite">
      <HeaderC title="Your Favorite" />
      <FavoriteList />
    </div>
  );
};

export default Favorite;
