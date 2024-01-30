import { Container } from "react-bootstrap";

import { EmptyPlaceholder } from "../../components/emptyPlaceholder/EmptyPlaceholder";
import { DataHandler } from "../../components/dataHandler/DataHandler";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchList = ({ data, loading, error }) => {
  return (
    <div className="my-5">
      <Container>
        <DataHandler loading={loading} error={error} gridLoading>
          {data.length <= 0 && !loading && (
            <EmptyPlaceholder text="No Movie Matches" />
          )}

          <div className="grid-4">
            {data &&
              data.map((movie, index) => (
                <MovieCard key={index} item={movie} />
              ))}
          </div>
        </DataHandler>
      </Container>
    </div>
  );
};

export default SearchList;
