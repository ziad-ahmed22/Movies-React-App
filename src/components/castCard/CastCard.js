import avatar from "../../assets/images/avatar.png";
import { IMG_URL } from "../../utils/URL";
import "./castCard.css";

export const CastCard = ({ item }) => {
  const { profile_path, original_name } = item;

  return (
    <div className="cast-card">
      <img
        className="rounded"
        src={profile_path ? `${IMG_URL}${profile_path}` : avatar}
        alt={original_name}
      />

      <h6 className="text-center text-white mt-3">{original_name}</h6>
    </div>
  );
};
