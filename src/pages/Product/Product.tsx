import { useLoaderData } from "react-router-dom";

interface Post {
  title: string;
}

const Product = () => {
  const data = useLoaderData() as Post[];
  console.log(data[0].title);
  return <h1 className="text-5xl">This is Product page</h1>;
};

export default Product;
