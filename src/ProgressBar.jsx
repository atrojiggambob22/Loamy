import React from "react";
const ProgressBar = ({ value }) => {
  return (

    // <div>
    //     hi

    // </div>
   
    <div style={{
      width: "100%",
      height: "10px",
      background: "#e5e7eb",
      borderRadius: "20px",
      margin:"10px 0",
      overflow: "hidden"
    }}>
      <div style={{
        width: `${value}%`,
        height: "100%",
        background: "#f59e0b",
        transition: "width 0.3s linear",
      }} />

      
    </div>
  );
};

// Usage
{/* <ProgressBar value={40} /> */}
export default ProgressBar;