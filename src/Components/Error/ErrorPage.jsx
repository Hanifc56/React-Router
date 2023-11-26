import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center">
      <h2 className="text-5xl text-center font-bold my-12">Oops!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3 className="text-2xl font-medium my-8">Page Not Found</h3>
          <p>Go Back to where you from</p>
          <Link to="/">
            <button className="bg-blue-500 ml-2 my-2 p-4 rounded-lg text-white">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
