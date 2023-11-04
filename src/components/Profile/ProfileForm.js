import React from "react";

const ProfileForm = () => {
  return (
    <form className="container mt-5">
      <div className="mb-3">
        <label htmlFor="new-password" className="form-label">
          New Password
        </label>
        <input type="password" id="new-password" className="form-control" />
      </div>
      <button className="btn btn-primary">Change Password</button>
    </form>
  );
};

export default ProfileForm;
