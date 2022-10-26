import { useStore } from "../../components/Layout";

const Login = () => {
  const {
    value: { count, seCount },
    render,
  } = useStore();
  console.log(count);

  return (
    <div>
      <h1 className="text-5xl">This is Login page</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Login;
