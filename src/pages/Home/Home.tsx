import { useStore } from "../../components/Layout";
import TextSplit from "../../components/TextSplit";

const Home = () => {
  const {
    value: { count, seCount },
    render,
  } = useStore();
  console.log(count);
  const text = "Hello dfrsh fsrgdh adgfsrg rwgyj ret fdgj H dfs ";
  const text2 =
    "Hello dfrsh fsrgdh \n adgfsrg rwgyj \n ret fdgj H dfs frt5h hyj7i \n yjuk8 jju7i \n yuko8, utko8";
  return (
    <div>
      <h1
        onClick={() => {
          seCount((pre) => pre + 1);
          render();
        }}
        className="text-5xl"
      >
        This is Home page{count}
      </h1>
      <TextSplit
        text={text}
        as="p"
        highlight={"Hello"}
        highlightClassName="text-5xl"
        caseOff
        renderNonHighlight={(text, isLast) => {
          return (
            <span className="text-blue-500">
              {text}
              {isLast ? "." : ""}
            </span>
          );
        }}
        renderHighlight={(highlightedText, isLast, className) => {
          return (
            <>
              <span className={className}>
                {highlightedText} {count}
              </span>
              {isLast ? "." : ""}
            </>
          );
        }}
      />
      <TextSplit
        text={text2}
        as="p"
        className="bg-blue-400"
        renderText={(text, isLast) => {
          return (
            <span className="text-xl">
              {isLast ? text + "..." : text + "."}
            </span>
          );
        }}
      />
    </div>
  );
};

export default Home;
