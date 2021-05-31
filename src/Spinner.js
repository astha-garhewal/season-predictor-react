import React from "react";

const Spinner = function (props) {
  return (
    <div>
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
