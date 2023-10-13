import React from "react";
import Scramble from "react-scramble";
import "./style.css";

const ScrambleComponent = ({ text }) => {
  return (
    <div className="scramble-txt-container">
      <Scramble
        autoStart={true}
        speed="medium"
        mouseEnterTrigger="restart"
        text={text}
        steps={[
          {
            roll: 30,
            action: "+",
            type: "random",
          },
          {
            action: "-",
            type: "random",
          },
        ]}
      />
    </div>
  );
};

export default ScrambleComponent;
