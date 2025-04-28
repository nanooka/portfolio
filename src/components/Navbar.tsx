import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <div className="nanooka">
          <b style={{ cursor: "pointer" }} id="nanooka-tags">
            {"<"}
          </b>
          <h3 style={{ color: "#319c89", cursor: "pointer" }}>Nanooka</h3>
          <b style={{ cursor: "pointer" }} id="nanooka-tags">
            {"/>"}
          </b>
        </div>
      </NavLink>
      <div className="navlinks">
        <NavLink to={"/"} style={{ textAlign: "center" }}>
          About Me
        </NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div
        className={`menuIcon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
        <NavLink to={"/"} style={{ textAlign: "center" }} onClick={closeMenu}>
          About Me
        </NavLink>
        <NavLink to={"/projects"} onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to={"/contact"} onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
