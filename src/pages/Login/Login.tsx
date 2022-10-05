import { useLocation } from "react-router-dom";

const Login = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1 className="text-5xl">This is Login page</h1>
    </div>
  );
};

export default Login;
