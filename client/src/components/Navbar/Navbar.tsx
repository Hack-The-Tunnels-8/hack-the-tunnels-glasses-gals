import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img style = {{width: 60, height: 60}} src="./public/glasses.png" alt="" />
        </Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className="button1" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className="button2" onClick={() => navigate("/login")}>Login</button>
            <button className="button4" onClick={() => navigate("/Dark Mode")}>Dark Mode</button> 
            /div
          </>
        ) : (
          <button className="button3" onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
