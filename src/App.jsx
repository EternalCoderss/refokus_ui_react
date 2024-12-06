import React from "react";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 font-['Satoshi'] text-white">
        <Navbar />
        <Work />
        <Stripes />
      </div>
    </>
  );
};

export default App;