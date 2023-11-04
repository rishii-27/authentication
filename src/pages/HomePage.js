import StartingPageContent from "../components/StartingPage/StartingPageContent";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Welcome to Our Website</h1>
              <StartingPageContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
