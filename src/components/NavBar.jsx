import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <header className="nav-bar">
      <section>
        <nav>
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/toys"}>toys</NavLink>
          <NavLink to={"/edit"}>edit</NavLink>
          <NavLink to={"/details"}>details</NavLink>
        </nav>
      </section>
    </header>
  );
}
