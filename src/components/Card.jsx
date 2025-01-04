import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

// bassis ko prop me lia from cards component fir jsx k through value dynamically pass kia
function Card({ width, start, para, hover }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width} ${hover} min-h-[30rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Who we are</h1>
      </div>
      <div className="down w-full ">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-500">
              Contact Us
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            repellat. Consectetur saepe iusto earum in.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
