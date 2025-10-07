import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginModal } from "./LoginModal";
import { useSelector } from "react-redux";
import { clearGlobalUser } from "../store/actions/user-actions";
import { isObjectEmpty } from "../utils/helpers";

export function NavBar() {
  const [isModalShown, setModalShown] = useState(false);
  const currentUser = useSelector((state) => state.userModule.user);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

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
      <button onClick={toggle} style={{ marginRight: "0.5rem" }}>
        open modal
      </button>
      <div className="user-dashboard">
        <button onClick={() => clearGlobalUser()}>Log out</button>
        <p>{currentUser && isObjectEmpty(currentUser) ? `logged in as: ${currentUser.username}` : "not logged in currently"}</p>
      </div>
      <LoginModal isShown={isModalShown} toggleHandle={toggle}></LoginModal>
    </header>
  );
}
