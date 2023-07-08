import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home.component";
import Favorite from "./pages/favorite.component";
import SignIn from "./pages/sign-in.component";
import SignUp from "./pages/sign-up.component";

const App = () => {
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
