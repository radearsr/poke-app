import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from "./utils/firebase/firebase.utils";
import {
  setCurrentUser
} from "./features/users/user.slice"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home.component";
import Favorite from "./pages/favorite.component";
import SignIn from "./pages/sign-in.component";
import SignUp from "./pages/sign-up.component";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = ({ accessToken, email }) => ({ accessToken, email });
      user && dispatch(setCurrentUser(pickedUser(user)));
    });
    return unSubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default App;
