import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ href, text }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive && href !== "#" ? "active" : "")}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
