import "./loadingData.scss";
const LoadingData = () => {
  return (
    <div class="loader">
      <p class="heading">Loading</p>
      <div class="loading">
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
      </div>
    </div>
  );
};

export default LoadingData;
