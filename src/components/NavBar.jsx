import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <header className="nav-bar">
      <section>
        <nav>
          <NavLink>option 1</NavLink>
          <NavLink>option 2</NavLink>
          <NavLink>option 3</NavLink>
        </nav>
      </section>
    </header>
  );
}
