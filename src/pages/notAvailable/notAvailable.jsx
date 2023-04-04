import "./notAvailable.scss";

const NotAvailablePage = () => {
  return (
    <div className="pna-container">
      <div className="pna">
        <h1>This page is currently not available</h1>
        <p>Please check back later.</p>
        <a href="/" class="home-btn" id="btn">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotAvailablePage;
