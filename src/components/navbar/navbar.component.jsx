import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/users/user.selector";
import { selectFavorite } from "../../features/favorites/favorite.selector";
import { signOutAuth } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const favoriteLists = useSelector(selectFavorite);

  return (
    <>
      <nav className="flex flex-row justify-between py-2 px-3 bg-cs-black sticky top-0 z-[100]">
        <div>
          <Link to="/">
            <img src="/pokeapi-banner.png" className="w-32" alt="" />
          </Link>
        </div>
        <ul className="flex flex-row items-center">
          <li>
            <Link to="/" className="text-cs-yellow">
              HOME
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/favorite" className="text-cs-yellow">
              FAVORITE
            </Link>
            <span className="ms-1 p-1 text-white bg-cs-orange rounded">
              {favoriteLists.length}
            </span>
          </li>
          <li>
            {currentUser ? (
              <button onClick={signOutAuth} className="text-cs-yellow">
                SIGN OUT
              </button>
            ) : (
              <Link to="/sign-in" className="text-cs-yellow">
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
