import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl py-20 flex items-center gap-2">
        {/* cards basis k through width dynamically pass kia  or start and para k through text dynamically pass kia */}
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"hover:bg-violet-800"}
        />
      </div>
    </div>
  );
}

export default Cards;
