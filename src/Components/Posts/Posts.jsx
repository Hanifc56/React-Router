import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="text-center">
      <h4 className="text-4xl font-semibold my-12">Posts: {posts.length} </h4>
      <div className="grid grid-cols-3 gap-4 mx-8 ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
