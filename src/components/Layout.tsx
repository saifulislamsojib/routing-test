import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import Navbar2 from "./Navbar2";

const Layout = () => {
  const { state } = useNavigation();

  return (
    <main>
      <ScrollRestoration />
      <Navbar2 />
      {state === "loading" ? <Loading /> : <Outlet />}
    </main>
  );
};

export default Layout;
