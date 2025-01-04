import React from "react";
import { FaCodeBranch } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-10 gap-20 flex ">
          <div className="basis-1/2">
            <h1 className="text-[11rem] font-semibold leading-none tracking-tight">
              refokus.
            </h1>
          </div>
          <div className="basis-1/2 gap-4 flex">
            <div className="basis-1/3">
              <h4 className="mb-10 capitalize text-zinc-200">socials</h4>
              {[
                { title: "instagram", url: "instagram.com" },
                { title: "twitter (x?)", url: "twitter.com" },
                { title: "linkedin", url: "linkedin.com" },
              ].map((item) => (
                <a
                  href={item.url}
                  className="block mt-3 text-zinc-600 capitalize">
                  {item.title}
                </a>
              ))}
            </div>
            <div className="basis-1/3">
              <h4 className="mb-10 capitalize text-zinc-500">socials</h4>
              {["Home", "work", "careers", "contact"].map((item) => (
                <a className="block mt-3 text-zinc-200 capitalize">{item}</a>
              ))}
            </div>
            <div className="basis-1/2 mt-10 flex flex-col items-end">
              <p className="text-right">
                Refokus is a pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <button className="mt-10 flex items-center gap-4 py-3 px-6  bg-blue-700">
                <FaCodeBranch />
                <span>View on Github</span>
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* privacy policy section */}
      <div className="max-w-screen-xl mx-auto border-t-[0.5px] border-zinc-600 py-2  gap-10 flex mt-5  items-start ml-auto ">
        {["Privacy Policy", "Terms of Service", "Cookie Policy", "impressum", "Terms"].map(
          (item) => (
            <a href="#" className="text-zinc-600 flex items-start capitalize mb-3">
              {item}
            </a>
          )
        )}
      </div>
    </>
  );
}

export default Footer;
