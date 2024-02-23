import React from "react";
import ContentLoader from "react-content-loader";

const CurrentWeatherLoader = () => (
  <ContentLoader
    speed={2}
    width={334}
    height={350}
    viewBox="0 0 335 350"
    backgroundColor="#1b1b1d"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="5" rx="11" ry="11" width="334" height="350" />
  </ContentLoader>
);

export default CurrentWeatherLoader;
