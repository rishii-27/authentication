import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <div className="card p-4"> {/* Add card class for a container with padding */}
            <h1 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Your Password
                </label>
                <input type="password" id="password" className="form-control" required />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary">
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={switchAuthModeHandler}
                >
                  {isLogin
                    ? "Create a new account"
                    : "Login with an existing account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
