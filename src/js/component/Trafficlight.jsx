import React, { useState, useEffect } from "react";
import "../../styles/index.css"; 

const Trafficlight = () => {
  
  const [color, setColor] = useState("red");

  
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === "red") return "yellow";
        if (prevColor === "yellow") return "green";
        return "red"; 
      });
    }, 2000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="trafficlight-container">
      <div className={`light red ${color === "red" ? "selected" : ""}`}></div>
      <div
        className={`light yellow ${color === "yellow" ? "selected" : ""}`}
      ></div>
      <div
        className={`light green ${color === "green" ? "selected" : ""}`}
      ></div>
    </div>
  );
};

export default Trafficlight;
