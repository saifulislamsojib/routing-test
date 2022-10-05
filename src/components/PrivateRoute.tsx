import { Navigate, useLocation } from "react-router-dom";

interface PrivateProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateProps) => {
  const { pathname } = useLocation();
  const user = false;
  return user ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: pathname }} />
  );
};

export default PrivateRoute;
