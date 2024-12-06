import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <>
      {/* Removed min-w-40 and replaced it with w-fit to allow the button to size based on its content  */}
      <div className="button w-fit px-6 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-2 ">
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight />
      </div>
    </>
  );
};

export default Button;
