import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <header className="nav-bar">
      <section>
        <nav>
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/toys"}>toys</NavLink>
          <NavLink>option 3</NavLink>
        </nav>
      </section>
    </header>
  );
}
