import "./NavBar.css";
import NavItem from "./NavItem";

const NavBar = ({ navItems, btn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Your Name</h1>
        <ul className="navbar-links">
          {navItems?.map((item, index) => {
            return (
              <li key={index}>
                <NavItem href={item.href} text={item.text} btn={item.btn} />
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="navbar-btn"
        onClick={() => (window.location.href = "/signin")}
      >
        Sign In
      </button>
    </nav>
  );
};

export default NavBar;
