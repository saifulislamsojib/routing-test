import { Dispatch, SetStateAction, useState } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import createStore from "../store/store";
import Loading from "./Loading";
import Navbar2 from "./Navbar2";

interface IStore {
  count: number;
  seCount: Dispatch<SetStateAction<number>>;
}

export const { Provider, useStore } = createStore<IStore>(
  null as unknown as IStore
);

const Layout = () => {
  const { state } = useNavigation();
  const [count, seCount] = useState(1);

  return (
    <Provider value={{ count, seCount }}>
      <ScrollRestoration />
      <Navbar2 />
      {state === "loading" ? <Loading /> : <Outlet />}
    </Provider>
  );
};

export default Layout;
