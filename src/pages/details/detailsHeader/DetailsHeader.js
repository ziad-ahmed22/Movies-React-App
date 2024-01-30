import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";
import { useEffect } from "react";

import { DataHandler } from "../../../components/dataHandler/DataHandler";
import { fetchSimilarMovies } from "../../../store/slices/similarSlice";
import { fetchMovieDetails } from "../../../store/slices/detailsSlice";
import { AddToFav } from "../../../components/addToFav/AddToFav";
import { fetchMovieCast } from "../../../store/slices/castSlice";
import { IMG_URL } from "../../../utils/URL";
import "./detailsHeader.css";

export const DetailsHeader = ({ movieId }) => {
  const { data, loading, error } = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId))
      .unwrap()
      .then(() => {
        dispatch(fetchMovieCast(movieId));
        dispatch(fetchSimilarMovies(movieId));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, movieId]);

  return (
    <DataHandler loading={loading} error={error}>
      <div className="details-header">
        {data.backdrop_path && (
          <div className="bg-img w-100 h-100">
            <img
              className="w-100 h-100"
              src={`${IMG_URL}${data.backdrop_path}`}
              alt=""
            />
          </div>
        )}

        <div className="content flex-center text-gray">
          <Container>
            <Row>
              <Col md={4} lg={3} className="d-none d-md-block">
                {data.poster_path && (
                  <div className="img">
                    <img
                      src={`${IMG_URL}${data.poster_path}`}
                      alt={data.original_title}
                      className="w-100 h-100 pt-0 rounded"
                    />
                  </div>
                )}
              </Col>

              <Col sm={12} md={8} lg={9}>
                <div className="box">
                  <h2 className="text-white fw-bold mb-4">
                    {data.original_title}
                  </h2>

                  <div className="fw-bold mb-3 fs-6">
                    <BsFillCalendarCheckFill className="text-red fs-6 me-2 mb-1" />
                    {data.release_date}
                  </div>

                  <div className="fw-bold mb-3 fs-6">
                    <FaLanguage className="text-red fs-3 me-2 mb-1" />
                    {data.original_language === "en"
                      ? "English"
                      : data.original_language}
                  </div>

                  <div className="mb-4">{data.overview}</div>

                  <div className="mb-5 d-flex flex-wrap">
                    {data.genres &&
                      data.genres.map((g) => (
                        <span
                          className="bg-red rounded m-2 text-white fw-bold py-1 px-2 fs-14"
                          key={g.id}
                        >
                          {g.name}
                        </span>
                      ))}
                  </div>

                  <div className="foot d-flex justify-content-end">
                    <AddToFav movie={data} />

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
    </DataHandler>
  );
};
