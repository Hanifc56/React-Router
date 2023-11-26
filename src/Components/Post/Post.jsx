import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="border-2 border-solid border-red-300 text-center rounded-lg py-12">
      <h4 className="text-3xl font-bold">Post of id: {id} </h4>
      <p className="text-2xl">Title: {title}</p>
      <Link
        className="bg-green-400 my-2 p-4 mr-2 rounded-lg text-white"
        to={`/post/${id}`}
      >
        Post details
      </Link>
      <Link to={`/post/${id}`}>
        <button className="bg-red-400 my-2 p-4 rounded-lg text-white">
          Show Details
        </button>
      </Link>
      <button
        onClick={handleShowDetails}
        className="bg-purple-300 ml-2 my-2 p-4 rounded-lg text-white"
      >
        Click to Show Details
      </button>
    </div>
  );
};

export default Post;
