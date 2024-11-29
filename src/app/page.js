import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Poster from "./components/Poster/Poster";
import SearchFilms from "./components/SearchFilms/SearchFilms";
import Films from "./components/Films/Films";
{
  /*import { Home } from "./components/Home/Home";*/
}

import LoginRegister from "./components/LoginRegister/LoginRegister";
import PosterLogin from "./components/PosterLogin/PosterLogin";
import NavbarLoginRegister from "./components/Navbar/Navbar";

export default function page() {
  return (
    <div className="min-w grid">
      <NavbarLoginRegister>
        <PosterLogin />
      </NavbarLoginRegister>
      <Poster />
      <SearchFilms />
      <Films />
    </div>
  );
}
