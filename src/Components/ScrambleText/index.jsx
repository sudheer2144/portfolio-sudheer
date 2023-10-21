import React from "react";
import Scramble from "react-scramble";
import "./style.css";

const ScrambleComponent = ({ text }) => {
  return (
    <span className="scramble-txt-container">
      <Scramble
        autoStart={true}
        speed="medium"
        mouseEnterTrigger="restart"
        text={text}
        steps={[
          {
            roll: 20,
            action: "+",
            type: "random",
          },
          {
            action: "-",
            type: "forward",
          },
        ]}
      />
    </span>
  );
};

export default ScrambleComponent;
