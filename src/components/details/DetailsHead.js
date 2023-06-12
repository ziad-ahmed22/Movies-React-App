import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../store/slices/detailsSlice";
import "./detailsHead.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { IMG_URL } from "./../URL";
import Loading from "./../loading/Loading";
import Error from "./../error/Error";
import { FaLanguage } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Love from "../movieCard/Love";

const DetailsHead = ({ movieId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [movieId]);

  const state = useSelector((state) => state.details);

  return (
    <>
      {state.loading && <Loading />}

      {state.error && !state.loading ? (
        <Error msg={state.error} height={80} />
      ) : (
        <>
          <div className="details position-relative">
            {state.data.backdrop_path && (
              <div className="bg-img w-100 h-100">
                <img
                  className="w-100 h-100"
                  src={`${IMG_URL}${state.data.backdrop_path}`}
                  alt=""
                />
              </div>
            )}

            <div className="content flex-center text-gray">
              <Container>
                <Row>
                  <Col md={4} lg={3} className="d-none d-md-block">
                    {state.data.poster_path && (
                      <div className="img">
                        <img
                          src={`${IMG_URL}${state.data.poster_path}`}
                          alt=""
                          className="w-100 h-100 pt-0 rounded"
                        />
                      </div>
                    )}
                  </Col>

                  <Col sm={12} md={8} lg={9}>
                    <div className="box">
                      <h2 className="text-white fw-bold mb-4">
                        {state.data.original_title}
                      </h2>

                      <div className="fw-bold mb-3 fs-6">
                        <BsFillCalendarCheckFill className="text-red fs-6 me-2 mb-1" />
                        {state.data.release_date}
                      </div>

                      <div className="fw-bold mb-3 fs-6">
                        <FaLanguage className="text-red fs-3 me-2 mb-1" />
                        {state.data.original_language === "en"
                          ? "English"
                          : state.data.original_language}
                      </div>

                      <div className="mb-4">{state.data.overview}</div>

                      <div className="mb-5 d-flex flex-wrap">
                        {state.data.genres &&
                          state.data.genres.map((g) => (
                            <span
                              className="bg-red rounded m-2 text-white fw-bold py-1 px-2 fs-14"
                              key={g.id}
                            >
                              {g.name}
                            </span>
                          ))}
                      </div>

                      <div className="foot">
                        <Love movie={state.data} />
                        <Button
                          onClick={() => navigate(-1)}
                          variant="info"
                          className=" ms-3"
                        >
                          Go Back
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsHead;
