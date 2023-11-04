import { useRef, useState } from "react";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCp_PNWJPafnJpmzekxyWnglUwipx9mrs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);

        if (res.ok) {
          // On Registration successful
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
        } else {
          return res.json().then((data) => {
            // Show error modal

            // const errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              const errorMessage = data.error.message;
              alert(errorMessage);
            }
          });
        }
      });
    }
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
