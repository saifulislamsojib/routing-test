import { useStore } from "../../components/Layout";

const About = () => {
  const {
    value: { count, seCount },
    render,
  } = useStore();
  console.log(count);
  return (
    <div>
      <h1 className="text-5xl">This is About page</h1>
      <h2 className="text-5xl">{count}</h2>
    </div>
  );
};

export default About;
