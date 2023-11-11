import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      console.log("Oops, `window` is not defined");
    }
  }, []);

  return { width, height };
};
