import React from "react";
import ContentLoader from "react-content-loader";

const CurrentWeatherLoader = () => (
  <ContentLoader
    speed={2}
    width={335}
    height={350}
    viewBox="0 0 335 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#bbd7ec"
  >
    <rect x="127" y="37" rx="11" ry="11" width="90" height="61" />
    <rect x="113" y="109" rx="10" ry="10" width="124" height="26" />
    <rect x="91" y="155" rx="10" ry="10" width="169" height="113" />
    <rect x="57" y="287" rx="10" ry="10" width="144" height="21" />
    <rect x="59" y="320" rx="10" ry="10" width="144" height="20" />
  </ContentLoader>
);

export default CurrentWeatherLoader;
