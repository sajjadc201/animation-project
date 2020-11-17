import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Man = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(1250px,0)" },
      // { transform: "translate(0,0)" },
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 12000, // Run, for 1000ms
      iterations: Infinity, // Repeat once
    },
  });

  return (
    <img
      src="/images/man1.gif"
      alt=""
      className="man"
      height="220px"
      width="300px"
      ref={ref}
    />
  );
};
