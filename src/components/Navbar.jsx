import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/mrbeast">Mr beast</Link>
      <Link to="/users/kyliejenner">kylie jenner</Link>
      <Link to="/users/imancodes">imancodes</Link>
    </nav>
  );
}
export default Navbar;
