import { useLoaderData } from "react-router-dom";
import Post from "../../types/Post";

const SinglePost = () => {
  const post = useLoaderData() as Post;

  return (
    <div>
      <h3 className="text-2xl mx-2">{post.title}</h3>
    </div>
  );
};

export default SinglePost;
