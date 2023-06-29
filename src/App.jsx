import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home.component";
import Authentication from "./pages/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
