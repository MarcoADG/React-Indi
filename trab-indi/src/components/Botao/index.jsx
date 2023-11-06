import React, { useState } from "react";

const Botao = () => {
  const [color, setColor] = useState("white");

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  return (
    <button
      onClick={changeColor}
      style={{ backgroundColor: color, color: "white" }}
    >
      Surpresa
    </button>
  );
};

export default Botao;
