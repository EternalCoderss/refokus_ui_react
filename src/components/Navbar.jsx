import React from "react";
import Logo from "../assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-6 items-center flex justify-between border-b-[1px] border-zinc-700">
        <div className="nleft flex items-center">
          <img src={Logo} alt="" />
          <div className="links flex gap-14 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
              <a
                className="text-sm font-regular flex items-center gap-1"
                href="#">
                {elem.length === 0 ? (
                  <span className=" h-5 w-[1.2px] bg-zinc-500"></span>
                ) : (
                  index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.25em #00ff19" }}
                      className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  )
                )}

                {elem}
              </a>
            ))}
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Navbar;
