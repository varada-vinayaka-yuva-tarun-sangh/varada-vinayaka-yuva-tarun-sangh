import React from "react";
import Ganapati from "../Assets/stageView.jpg";
import FloorView from "../Assets/floorView.jpg";
import Arrow from "../Assets/arrow.png";
import bgMusic from "../Assets/audio.mp3";

const Assests = () => {
  return (
    <>
      <a-assets>
        <img
          id="image2023"
          src={Ganapati}
          alt="Varada Vinayaka Ganapati 2023"
        />
        <img
          id="floor2023"
          src={FloorView}
          alt="Floor View Varada Vinayaka Ganapati 2023"
        />
        <img id="arrow" src={Arrow} alt="Arrow Varada Vinayaka Ganapati 2023" />
        <audio id="bgAudio" src={bgMusic} preload="auto"></audio>
      </a-assets>
    </>
  );
};

export default Assests;
