import { Link, Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between py-2 px-3 bg-black sticky top-0">
        <div>
          <img src="https://pokeapi.co/static/pokeapi_256.3fa72200.png" className="w-32" alt="" />
        </div>
        <ul className="flex flex-row items-center">
          <li>
            <Link to="/" className="text-yellow">HOME</Link>
          </li>
          <li className="mx-3">
            <Link to="/favorite" className="text-yellow">FAVORITE</Link>
          </li>
          <li>
            <Link to="/auth" className="text-yellow">SIGN IN / SIGN UP</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
