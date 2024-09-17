import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="py-4 border-b-2 border-stone-700">
      <nav className="flex align-middle justify-center">
        <ul className="flex gap-6">
          <li className="text-2xl">
            <NavLink to="/dashboard">
              <span>Statistics</span>
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/tasks">
              <span>Tasks</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
