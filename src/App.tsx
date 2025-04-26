// import React from "react";

import Home from "./components/Home";

const App = () => {
  return (
    <div
      style={{
        background: "var(--Background-Gradient)",
        fontFamily: "var(--font-display)",
      }}
    >
      <div className=" px-6">
        <Home />
      </div>
    </div>
  );
};

export default App;
