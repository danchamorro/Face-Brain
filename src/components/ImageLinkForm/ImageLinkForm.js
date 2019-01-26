import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm({ onInputChange }) {
  return (
    <div>
      <p className="f3">
        This Magic Brain will detect faces in your picture. Give it a try!
      </p>
      <div className="center">
        <div className="form pa4 br-3 shadow-5 center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
