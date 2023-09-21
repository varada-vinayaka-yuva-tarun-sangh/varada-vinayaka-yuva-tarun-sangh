import React, { useState, useEffect } from "react";
import Assests from "./Assets";
import Camera from "./Camera";
import "../App.css";
import { BallTriangle } from "react-loader-spinner";

const Frame = () => {
  const [loader, setLoader] = useState(true);

  const handleSpinner = async () => {
    await setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    handleSpinner();
  }, []);

  return (
    <>
      {loader ? (
        <>
          <div>
            <div className="spinner">
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#FFA500"
                visible={loader}
              />
            </div>
            <center>
              <h1 className="text">Varada Vinayaka Yuva Tarun Sangh</h1>
            </center>
          </div>
        </>
      ) : (
        <a-scene
          vr-mode-ui="cardboardModeEnabled: true"
          loading-screen="enabled:false"
          cursor="rayOrigin: mouse"
        >
          <Assests />
          <a-sky
            id="sky"
            src="#floor2023"
            sound="src:#bgAudio; volume:1.1; on:click"
          ></a-sky>
          <a-text
            id="developedBy"
            value="Designed & Developed by Veeresh Halli"
            position="-2.5 -3 -4.2"
            color="black"
            scale="0.60 0.60 0.60"
            visible="false"
          ></a-text>
          <a-image
            id="floorView"
            src="#arrow"
            position="-3.5 -0.75 -15"
            rotation="50 0 150"
            scale="1.6 1.6 1.6"
            event-set__mouseenter="scale:2 2 2"
            event-set__mouseleave="scale:1.6 1.6 1.6"
            event-set__click="_event:click; _target:#sky; _delay:0; src:#image2023"
            event-set__click1="_event:click; _target:#sky; _delay:0; sound.refDistance:1.1"
            event-set__click2="_event:click; _target:#stageView; _delay:0; visible:true"
            event-set__click3="_event:click; _target:#floorView; _delay:0; visible:false"
            event-set__click4="_event:click; _target:#developedBy; _delay:0; visible:true"
            visible="true"
          ></a-image>
          <a-image
            id="stageView"
            src="#arrow"
            position="4.5 -5 15"
            rotation="0 45 145"
            scale="1.4 1.4 1.4"
            event-set__mouseenter="scale:1.9 1.9 1.9"
            event-set__mouseleave="scale:1.4 1.4 1.4"
            event-set__click="_event:click; _target:#sky; _delay:0; src:#floor2023"
            event-set__click1="_event:click; _target:#sky; _delay:0; sound.refDistance:0.5"
            event-set__click2="_event:click; _target:#stageView; _delay:0; visible:false"
            event-set__click3="_event:click; _target:#floorView; _delay:0; visible:true"
            event-set__click4="_event:click; _target:#developedBy; _delay:0; visible:false"
            visible="false"
          ></a-image>

          <Camera />
        </a-scene>
      )}
    </>
  );
};

export default Frame;
