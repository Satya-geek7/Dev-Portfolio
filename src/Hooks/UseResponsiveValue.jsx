import { useEffect, useState } from "react";

const useResponsiveValue = (values) => {
  const [value, setValue] = useState(values.lg || 0);

  useEffect(() => {
    const updateValue = () => {
      const width = window.innerWidth;
      if (width >= 1024) setValue(values.lg);
      else if (width >= 768) setValue(values.md);
      else setValue(values.sm);
    };

    updateValue();
    window.addEventListener("resize", updateValue);
    return () => window.removeEventListener("resize", updateValue);
  }, [values]);

  return value;
};

export default useResponsiveValue;
