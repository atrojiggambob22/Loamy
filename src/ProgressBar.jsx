import React from "react";
const ProgressBar = ({ value }) => {
  return (

    // <div>
    //     hi

    // </div>
   
    <div style={{
      width: "100%",
      height: "10px",
      background: "#D4DA7B",
      borderRadius: "20px",
      margin:"10px 0",
      overflow: "hidden"
    }}>
      <div style={{
        width: `${value}%`,
        height: "100%",
        background: "#768E52",
        transition: "width 0.3s linear",
      }} />

      
    </div>
  );
};

// Usage
{/* <ProgressBar value={40} /> */}
export default ProgressBar;