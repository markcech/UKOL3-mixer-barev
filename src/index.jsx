import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ColorSlider } from "./Components/ColorSlider";
import "./style.css";

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          baseColor="red"
          colorName="Červená"
          onValueChange={setRedValue}
        />
        <ColorSlider
          baseColor="green"
          colorName="Zelená"
          onValueChange={setGreenValue}
        />
        <ColorSlider
          baseColor="blue"
          colorName="Modrá"
          onValueChange={setBlueValue}
        />
      </div>
      <div
        className="color-box"
        id="color-box"
        style={{
          backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
        }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
