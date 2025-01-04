import React, { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  const showImages = (ARR) => {
    setImages((prev) =>
      prev.map((item, index) =>
        ARR.includes(index) 
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    showHideimages(Math.floor(latest * 100));
  });

  function showHideimages(scrollvalue) {
    switch (scrollvalue) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 6:
        showImages([0, 1, 2, 3]);
        break;
      case 8:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
      default:
        showImages([]); // Handle cases not explicitly defined
    }
  }

  return (
    <>
      <div className="work w-full relative h-[100vh]">
        <div className="main relative max-w-screen-xl mx-auto text-center">
          <h1 className="text-[30vw] font-medium select-none tracking-tight leading-none">
            work
          </h1>
          <div className="image-div absolute w-full h-full top-0">
            {images.map(
              (elem, index) =>
                elem.isActive && (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: elem.isActive ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    src={elem.url}
                    style={{ top: elem.top, left: elem.left }}
                    alt={`Work image ${index + 1}`}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
