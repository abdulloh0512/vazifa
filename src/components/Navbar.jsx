import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">THE PLANETS</h1>
      <div className="links">
        <NavLink className={"link"} to={"/"}>MERCURY</NavLink>
        <NavLink className={"link"} to={"/venus"}>VENUS</NavLink>
        <NavLink className={"link"} to={"/earth"}>EARTH</NavLink>
        <NavLink className={"link"} to={"/mars"}>MARS</NavLink>
        <NavLink className={"link"} to={"/jupeter"}>JUPITER</NavLink>
        <NavLink className={"link"} to={"/saturan"}>SATURAN</NavLink>
        <NavLink className={"link"} to={"/urans"}>URANS</NavLink>
        <NavLink className={"link"} to={"/neptune"}>NEPTUNE</NavLink>
      </div>
    </div>
  );
}

export default Navbar;


