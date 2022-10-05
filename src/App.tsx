import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import router from "./router/router";

const App = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default App;
