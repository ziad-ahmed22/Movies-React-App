import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import { handleLove } from "../../store/slices/loveSlice";
import "./addToFav.css";

export const AddToFav = ({ movie }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.love);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(state.some((m) => m.id === movie.id));
  }, [movie.id, state]);

  return (
    <div className="add-to-fav">
      <Tooltip id={movie.id} className="my-tooltip" />
      <AiFillHeart
        onClick={() => dispatch(handleLove(movie))}
        className={isActive ? "active" : ""}
        data-tooltip-place="top"
        data-tooltip-id={movie.id}
        data-tooltip-content={
          isActive ? "Remove From Love List" : "Add To Love List"
        }
      />
    </div>
  );
};
