import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 50,
    y: 70,
  });

  const handleMouseMove = (event) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY,
    };

    setPosition(newPosition);
  };

  return (
    <div
      onPointerMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
