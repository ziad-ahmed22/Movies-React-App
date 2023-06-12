import "./love.css";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToLove, removeFromLove } from "../store/slices/loveSlice";
import { useEffect, useState } from "react";

const Love = ({ movie }) => {
  const state = useSelector((state) => state.love);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(state.find((m) => m.id === movie.id));
  }, [state, movie.id]);

  const handelLove = () => {
    if (state.find((m) => m.id === movie.id)) {
      setIsActive(false);
      dispatch(removeFromLove(movie));
    } else {
      setIsActive(true);
      dispatch(addToLove(movie));
    }
  };

  return (
    <AiFillHeart
      onClick={handelLove}
      title={isActive ? "Remove From Love List" : "Add To Love List"}
      className={isActive ? "active" : ""}
    />
  );
};

export default Love;
