import { NavLink } from "react-router-dom";

export default function Navbar() {
  // const handleRefreshClick = () => {
  //   window.scrollTo(0, 0);
  //   window.location.reload();
  // };
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
    </div>
  );
}
