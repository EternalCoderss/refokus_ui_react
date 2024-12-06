import React from "react";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <div className="w-full bg-zinc-900 font-['Satoshi'] text-white">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
      </div>
    </>
  );
};

export default App;
