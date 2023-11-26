import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-2 border-solid border-red-300 text-center rounded-lg py-12">
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="text-xl">Email: {email} </p>
      <p className="text-xl">Phone: {phone} </p>
      <Link
        className="bg-green-400 my-2 p-4 mr-2 rounded-lg text-white"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
      <Link to={`/user/${id}`}>
        <button className="bg-red-400 my-2 p-4 rounded-lg text-white">
          {" "}
          Click me
        </button>
      </Link>
    </div>
  );
};

export default User;
