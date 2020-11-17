import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { Man } from "./Man";

export const Home = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(0,120px)" },
      { transform: "translate(0,120px)" },
      { transform: "translate(0,120px)" },
      { transform: "translate(0,120px)" },
      { transform: "translate(0,120px)" },
      { transform: "translate(0,400px)" },
      { transform: "translate(0,400px)" },
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 12000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      fill: "forwards",
    },
  });

  return (
    <div className="cont">
      <img src="/images/main.jpg" alt="skyshine" className="img1" />
      <img
        src="/images/carimg.png"
        alt=""
        width="250px"
        height="250px"
        className="img2"
        ref={ref}
      />
      <img
        src="/images/flag.gif"
        alt=""
        className="img3"
        width="30px"
        height="30px"
      />
      <span className="verticle-line"></span>
      <Man />
    </div>
  );
};
