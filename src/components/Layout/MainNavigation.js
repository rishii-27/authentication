import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandle = (e) => {
    e.preventDefault();
    authCtx.logout();
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong className="text-dark">React Auth</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {!isLoggedIn && (
                <li className="nav-item mr-3">
                  <Link to="/auth" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item mr-3">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={logoutHandle}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
