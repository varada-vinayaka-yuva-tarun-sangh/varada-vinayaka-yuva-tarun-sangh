import React from "react";

const Camera = () => {
  return (
    <>
      <a-camera>
        <a-cursor
          id="cursor"
          animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
        ></a-cursor>
      </a-camera>
    </>
  );
};

export default Camera;
