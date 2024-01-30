import img from "../../assets/images/header.png";
import "./headec.css";

const HeaderC = ({ title }) => {
  return (
    <div className="header text-white position-relative">
      <img src={img} alt={title} />
      <h1 className="flex-center">{title}</h1>
    </div>
  );
};

export default HeaderC;
