import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateOutlet = () => {
  const { pathname } = useLocation();
  const user = true;
  return user ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" state={{ from: pathname }} />
  );
};

export default PrivateOutlet;
