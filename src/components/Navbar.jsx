import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Contact"> Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/Post">Post</Link>
    </nav>
  );
}
export default Navbar;
