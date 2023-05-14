import { useEffect } from "react";
import { useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };

    // Update window width on component mount
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return width;
};

export default useWindowWidth;
