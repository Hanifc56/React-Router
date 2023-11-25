import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>this is the Home</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
