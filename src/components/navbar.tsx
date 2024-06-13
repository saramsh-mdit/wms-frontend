import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

type navItem = {
  title: string;
  href: string;
};

const NavItem = ({ title, href }: navItem) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? "font-bold text-gray-100" : " text-emerald-200"
      }
    >
      {title}
    </NavLink>
  );
};

const NavBar = () => {
  const authContext = useContext(AuthContext);
  return (
    <nav className="p-1 flex gap-5 justify-center bg-green-900 sticky top-0 z-50">
      <NavItem title="Home" href="/" />
      {authContext.authenticated ? (
        <NavItem
          title={authContext.isAdmin ? "Dashboard" : "Profile"}
          href={authContext.isAdmin ? "/dashboard" : "/user"}
        />
      ) : (
        <NavItem title="Login" href="/login" />
      )}
    </nav>
  );
};

export default NavBar;
