import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginModal } from "./LoginModal";

export function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isModalShown, setModalShown] = useState(false);
  const toggle = () => {
    setModalShown((prev) => !prev);
  };
  return (
    <header className="nav-bar">
      <nav>
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/toys"}>toys</NavLink>
        <NavLink to={"/edit"}>edit</NavLink>
        <NavLink to={"/details"}>details</NavLink>
      </nav>
      <button onClick={toggle} style={{marginRight: "0.5rem"}}>open modal</button>
      <LoginModal
        isLogin={loggedIn}
        isShown={isModalShown}
        toggleHandle={toggle}
      ></LoginModal>
    </header>
  );
}
