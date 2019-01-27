import React from "react";
import "./FaceRecognition.css";

export default function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="input-image"
          src={imageUrl}
          alt="face"
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
}
