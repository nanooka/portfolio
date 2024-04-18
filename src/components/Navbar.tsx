import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <h3>{"<Nanuka />"}</h3> */}
      {/* <div> */}
      <NavLink to={"/"}>About Me</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      {/* </div> */}
    </div>
  );
}
