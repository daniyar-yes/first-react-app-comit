import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef(null);
  const canvasContextRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasContextRef.current;
      ctx.beginPath();
      ctx.arc(95, 50, 80, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }, []);

  const handleClick = () => {
    if (canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext("2d");
      let ctx = canvasContextRef.current;
      ctx.beginPath();
      ctx.arc(95, 50, 800, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fillRect(10, 150, 200, 75);
  }
}

const handleClear = () => {
  if (canvasRef.current) {
    canvasContextRef.current = canvasRef.current.getContext("2d");
    let ctx = canvasContextRef.current;
  ctx.clearRect(0,0, 100,150);
}
}

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
