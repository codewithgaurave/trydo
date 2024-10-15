import React from "react";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Wrap cards on smaller screens
        gap: "20px",
        justifyContent: "center",
        padding: "40px 0px",
        width: "100%",
      }}
    >
      {/* First Card */}
      <div
        style={{
          flex: "1 1 300px", // Set flex-basis to make each card take at least 300px, and adjust based on screen size
          maxWidth: "28%", // For larger screens
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center", // Ensure centered text
          padding: "20px",
        }}
      >
        <i
          class="ri-cast-line"
          style={{ color: "#ff00a6", fontSize: "80px" }}
        ></i>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Business Strategy</p>
        <p style={{ color: "grey", margin: "0px" }}>
          I throw myself down among the
          <br /> tall grass by the stream as I lie
          <br /> close to the earth.
        </p>
      </div>

      {/* Second Card */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "28%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <i
          class="ri-stack-line"
          style={{ color: "#ff00a6", fontSize: "80px" }}
        ></i>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Business Strategy</p>
        <p style={{ color: "grey", margin: "0px" }}>
          I throw myself down among the
          <br /> tall grass by the stream as I lie
          <br /> close to the earth.
        </p>
      </div>

      {/* Third Card */}
      <div
        style={{
          flex: "1 1 300px",
          maxWidth: "28%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <i
          class="ri-group-line"
          style={{ color: "#ff00a6", fontSize: "80px" }}
        ></i>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Business Strategy</p>
        <p style={{ color: "grey", margin: "0px" }}>
          I throw myself down among the
          <br /> tall grass by the stream as I lie
          <br /> close to the earth.
        </p>
      </div>
    </div>
  );
};

export default Card;
