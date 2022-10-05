import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOutSideClick from "../hooks/useOutSideClick";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Add Product", path: "/dashboard/add-product" },
  { name: "Manage Product", path: "/dashboard/manage-product" },
];

const Navbar2 = () => {
  const { isActive, toggleActive, menuRef } = useOutSideClick();

  return (
    <header className="mb-2 sticky top-0 bg-blue-500 text-white">
      <nav className="container mx-auto flex p-2 w-full items-center justify-between">
        <Link className="text-2xl font-semibold" to="/">
          Routing Test
        </Link>
        <div className="md:hidden text-2xl" onClick={toggleActive}>
          {isActive ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`md:flex items-center w-[250px] min-h-[100vh] md:min-h-min md:w-[unset] ${
            isActive ? "left-0" : "left-[-100%]"
          } top-0 transition-all absolute md:static bg-blue-500`}
          ref={menuRef}
        >
          <Link
            className="text-2xl font-semibold m-2 mb-4 block md:hidden"
            to="/"
          >
            Routing Test
          </Link>
          {navData.map(({ name, path }) => (
            <Link
              className="mx-3 text-base block my-3 md:my-0"
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

export default Navbar2;
