import Loading from "../loading/Loading";
import Error from "../error/Error";

export const DataHandler = ({
  loading,
  gridLoading,
  error,
  errorBtn,
  children,
}) => {
  return (
    <>
      {loading && !error ? (
        <Loading grid={gridLoading} />
      ) : !loading && error ? (
        <Error msg={error} btn={errorBtn} />
      ) : (
        <>{children}</>
      )}
    </>
  );
};
