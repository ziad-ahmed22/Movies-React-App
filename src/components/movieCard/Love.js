import "./love.css";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { handleLove } from "../store/slices/loveSlice";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Love = ({ movie }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.love);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(state.some((m) => m.id === movie.id));
  }, [state]);

  return (
    <>
      <Tooltip id={movie.id} className="my-tooltip" />
      <AiFillHeart
        onClick={() => dispatch(handleLove(movie))}
        className={isActive ? "active" : ""}
        data-tooltip-place="left"
        data-tooltip-id={movie.id}
        data-tooltip-content={
          isActive ? "Remove From Love List" : "Add To Love List"
        }
      />
    </>
  );
};

export default Love;
