import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Orders", path: "/orders" },
  { name: "Checkout", path: "/checkout" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mb-2 sticky top-0 bg-blue-500 text-white">
      <nav className="container mx-auto flex p-2 w-full items-center justify-between">
        <Link className="text-2xl font-semibold" to="/">
          Routing Test
        </Link>
        <div
          className="md:hidden text-xl"
          onClick={() => setOpen((pre) => !pre)}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`md:flex items-center w-full text-center md:w-min ${
            open ? "left-0" : "left-[-100%]"
          } top-[49px] transition-all absolute md:static bg-blue-500`}
        >
          {navData.map(({ name, path }) => (
            <Link
              className="mx-2 text-base block my-2 md:my-0"
              to={path}
              key={path}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
