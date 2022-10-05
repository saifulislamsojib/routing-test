import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import PrivateOutlet from "../components/PrivateOutlet";
import About from "../pages/About/About";
import AddProduct from "../pages/Dashboard/AddProduct";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageProduct from "../pages/Dashboard/ManageProduct";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Posts from "../pages/Product/Posts";
import SinglePost from "../pages/Product/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <PrivateOutlet />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "posts",
            element: <Posts />,
            loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
            errorElement: <NotFound />,
          },
          {
            path: "posts/:postId",
            element: <SinglePost />,
            loader: ({ params }) =>
              fetch(
                `https://jsonplaceholder.typicode.com/posts/${params.postId}`
              ),
            errorElement: <NotFound />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "add-product",
                element: <AddProduct />,
              },
              {
                path: "manage-product",
                element: <ManageProduct />,
              },
            ],
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
