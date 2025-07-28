import { useEffect, useState } from "react";

const useScrollTrigger = (threshold = 200) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return trigger;
};

export default useScrollTrigger;
