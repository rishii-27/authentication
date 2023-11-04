// ProfilePage.js
import UserProfile from "../components/profile/user-profile";

const ProfilePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Your Profile</h1>
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
