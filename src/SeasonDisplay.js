import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's heat the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, its too chilly!",
    iconName: "snowflake",
  },
};

const getSeason = function (lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = function (props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`seasonDisplay ${season}`}>
      <i className={`icon-left ${iconName} massive icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
