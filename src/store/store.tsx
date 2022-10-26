import { ReactNode, useState } from "react";

class Store<T> {
  value: T;
  Provider: ({ children }: { children: ReactNode; value: T }) => JSX.Element;
  useStore: () => { value: T; render: () => void };

  constructor(value: T) {
    this.value = value;
    this.Provider = ({ children, value }) => {
      this.value = value || this.value;
      return <>{children}</>;
    };
    this.useStore = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unused-vars
      const [_, setRender] = useState(1);
      const render = () => {
        setRender((pre) => pre + 1);
      };
      return { value: this.value, render };
    };
  }
}

const createStore = <T,>(value: T) => new Store(value);

export default createStore;
