import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import AuthContext from "../../Store/auth-context";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const passwordChangeHandle = (e) => {
    e.preventDefault();

    const enteredNewPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCCp_PNWJPafnJpmzekxyWnglUwipx9mrs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // Assume: Always Succeeds!
      console.log(res);
    });
  };

  return (
    <form className="container mt-5" onSubmit={passwordChangeHandle}>
      <div className="mb-3">
        <label htmlFor="new-password" className="form-label">
          New Password
        </label>
        <input
          type="password"
          id="new-password"
          className="form-control"
          minLength="7"
          ref={passwordInputRef}
        />
      </div>
      <button className="btn btn-primary">Change Password</button>
    </form>
  );
};

export default ProfileForm;
