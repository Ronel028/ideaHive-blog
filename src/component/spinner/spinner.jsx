import Spinner from "react-bootstrap/Spinner";
import "./spinner.scss";

function Loading() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      Please wait...
    </div>
  );
}

export default Loading;
