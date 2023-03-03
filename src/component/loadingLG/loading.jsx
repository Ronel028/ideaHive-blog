import Spinner from "react-bootstrap/Spinner";
import "./loading.scss";

function LoadingLG(props) {
  return (
    <div className="loading-container">
      <div className="loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        {props.loadingWord}
      </div>
    </div>
  );
}

export default LoadingLG;
