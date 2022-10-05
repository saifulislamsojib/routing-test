import { Link, useLoaderData } from "react-router-dom";
import Post from "../../types/Post";

const Posts = () => {
  const posts = useLoaderData() as Post[];

  return (
    <div>
      <h1 className="text-5xl">This is Posts page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            className="text-xl m-3 text-blue-500 block"
            to={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
