import { useState } from "react";
import { LinkButton } from "../LinkButton";

const Letter = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };

  const handleOnMouseOut = () => {
    setIsHovering(false);
  };
  

  return (
    <div
      className={`${!isHovering ? "animate-pulse-letter" : ""} group w-64 h-84`}
    >
      <div
        className={`flex z-10 group-hover:rotate-y-180 duration-1000 cursor-pointer`}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseOut}
      >
        <div className="h-84 w-20 bg-amber-400 rounded-tl-md rounded-bl-md"></div>
        <div className="flex flex-col">
          <div className="h-16 w-48 bg-amber-400 mb-1 flex justify-center items-center rounded-tr-md rounded-br-md">
            {isHovering ? (
              <div className="rotate-y-180">
                <LinkButton text="About Me" path={"about-me"} className="p-2" />
              </div>
            ) : null}
          </div>
          <div className="h-16 w-48 bg-amber-400 mt-16 mb-1 flex justify-center items-center items-center rounded-tr-md rounded-br-md">
            {isHovering ? (
              <div className="rotate-y-180">
                <LinkButton text="Projects" className="p-2" />
              </div>
            ) : null}
          </div>
          <div className="h-16 w-48	bg-amber-400 mt-16 flex justify-center items-center items-center rounded-tr-md rounded-br-md">
            {isHovering ? (
              <div className="rotate-y-180">
                <LinkButton text="Contact" className="p-2" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
