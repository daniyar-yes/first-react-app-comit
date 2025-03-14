import "./App.css";
import { useRef } from "react";

function App() {
  const canvasRef = useRef(null);
  const canvasContextRef = useRef(null);

  let newX = 20;
  let newY = 280;
  

  const handleClick = () => {
    if (canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasContextRef.current;

      ctx.clearRect(0, 0, 500, 300);

      ctx.beginPath();

      ctx.arc(180, 130, 80, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = "red";
      ctx.fillRect(10, 150, 200, 75);

      // Define a new path
      ctx.beginPath();

      // Set a start-point
      ctx.moveTo(0, 0);

      // Set an end-point
      ctx.lineTo(500, 300);

      // Stroke it (Do the Drawing)
      ctx.stroke();

      ctx.font = "70px Arial";
      ctx.strokeText("Hello World", newX, newY);
      newX = newX + 10;
      newY = newY - 10;

    }
  };

  const handleClear = () => {
    if (canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasContextRef.current;
      ctx.clearRect(0, 0, 500, 300);
    }
  };

  return (
    <>
      <div>Overlay</div>
      <canvas
        ref={canvasRef}
        width="500px"
        height="300px"
        style={{ border: "3px solid red" }}
      ></canvas>
      <button onClick={handleClick}>Draw Rectangle</button>
      <button onClick={handleClear}>Clear Rect Area</button>
    </>
  );
}

export default App;
