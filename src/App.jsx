import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home.component";
import Favorite from "./pages/favorite.component";
import Authentication from "./pages/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default App;
