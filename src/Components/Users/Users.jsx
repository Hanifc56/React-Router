import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // state --> for data
  // state --> loader
  // use effect
  // fetch --> set data--> set sate
  console.log(users);
  return (
    <div>
      <h2 className="text-xl text-center">Our Users : {users.length}</h2>
      <p className=" text-center">Fantastic and luicca users</p>
      <div className="grid grid-cols-3 gap-4 mx-8">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
