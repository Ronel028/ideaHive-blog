import Spinner from "react-bootstrap/Spinner";
import "./loading.scss";

function LoadingLG() {
  return (
    <div className="loading-container">
      <div className="loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        Saving, Please wait...
      </div>
    </div>
  );
}

export default LoadingLG;
