import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/users.context";
import { PokeProvider } from "./context/poke.context";
import { FavoriteProvider } from "./context/favorite.context";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PokeProvider>
        <FavoriteProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoriteProvider>
      </PokeProvider>
    </UserProvider>
  </React.StrictMode>,
);
