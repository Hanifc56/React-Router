import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="text-2xl text-center">
        <h1 className="text-5xl font-bold my-12">My website</h1>
        <Link className="pr-2 text-purple-400" to="/">
          Home
        </Link>
        <Link className="pr-2 text-purple-400" to="/posts">
          Posts
        </Link>
        <Link className="pr-2 text-purple-400" to="/about">
          About
        </Link>
        <Link className="pr-2 text-purple-400" to="/contact">
          Contact
        </Link>
        <Link className="pr-2 text-purple-400" to="/users">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
