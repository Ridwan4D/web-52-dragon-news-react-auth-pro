import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="h-[90vh] flex flex-col justify-center items-center space-y-5">
        <h1 className="text-7xl font-bold">Oops!</h1>
        <p className="text-5xl font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-3xl font-medium">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="btn btn-wide text-lg font-medium">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
