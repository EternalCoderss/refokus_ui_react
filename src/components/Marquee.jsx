import React from "react";

function Marquee({ imagesUrls }) {
  return (
    <>
      <div className="flex w-full gap-20 py-8 whitespace-nowrap overflow-hidden">
        {imagesUrls.map((url) => (
          <img src={url} alt="" className="w-[6vw] flex-shrink-0" />
        ))}
        ,
        {imagesUrls.map((url) => (
          <img src={url} alt="" className="w-[6vw] flex-shrink-0" />
        ))}
      </div>
    </>
  );
}

export default Marquee;
