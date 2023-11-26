import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center">
      <h2>Post Details About: {id} </h2>
      <p>Title: {title} </p>
      <p>
        <small> {body} </small>
      </p>
      <button
        className="bg-red-400 my-2 p-3 rounded-lg text-white"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
