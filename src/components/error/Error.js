import error404 from "../../assets/images/404.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = ({ msg, btn, code }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-blue flex-center flex-column py-5">
      {code === 404 && (
        <img src={error404} alt="error img" className="w-25 h-25" />
      )}

      <h3 className="text-white fw-bold mt-5 mb-4">{msg}</h3>

      {btn && (
        <Button
          className="bg-red px-4 py-2 fw-bold"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      )}
    </div>
  );
};

export default Error;
