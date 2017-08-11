import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emailly!</h1>
      Collect feedback from your users
      <div style={{ marginTop: "40px" }} className="progress">
          <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default Landing;
