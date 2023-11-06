import { useContext } from "react";
import { useRef, useState } from "react";
import AuthContext from "../../Store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCp_PNWJPafnJpmzekxyWnglUwipx9mrs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCp_PNWJPafnJpmzekxyWnglUwipx9mrs";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setIsLoading(false);

        if (res.ok) {
          // On Registration successful
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";

          console.log("success");
          return res.json();
        } else {
          const data = await res.json();

          // const errorMessage = "Authentication Failed!";
          if (data && data.error && data.error.message) {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          }
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/");
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6">
          <div className="card p-4">
            <h1 className="text-center mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <form onSubmit={submitHandle}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  ref={emailInputRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  ref={passwordInputRef}
                  required
                />
              </div>
              <div className="d-grid">
                {!isLoading && (
                  <button className="btn btn-primary">
                    {isLogin ? "Login" : "Create Account"}
                  </button>
                )}
                {isLoading && <p>Sending Request...</p>}
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
