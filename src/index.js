//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date(2019, 1, 1, 19).getHours();
const textColor = {
  color: "red"
};

const text = () => {
  if (currentTime >= 0 && currentTime < 12) {
    return "Good morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    textColor.color = "green";
    return "Good Afternoon";
  } else if (currentTime >= 18 && currentTime < 23) {
    textColor.color = "blue";
    return "Good Night";
  }
};

ReactDOM.render(
  <div>
    <h1 className="heading" style={textColor}>
      {text()}
    </h1>
  </div>,
  document.getElementById("root")
);
console.log(text());
