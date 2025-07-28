import React from "react";
import { motion } from "framer-motion";
import useResponsiveValue from "../../Hooks/UseResponsiveValue";

const Para = ({
  content = "",
  mt,
  trigger,
  initial = 0,
  after = { sm: 0, md: 0, lg: 0 },
}) => {
  const mtClass =
    {
      24: "mt-24",
      10: "mt-10",
      6: "mt-10",
      0: "mt-0",
    }[mt] || "mt-0";

  const responsiveAfter = useResponsiveValue(after);

  return (
    <motion.div
      initial={{ x: initial }}
      animate={{ x: trigger ? responsiveAfter : 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`text-gray-300 ${mtClass} lg:text-[21px] md:text-[18px] sm:text-[15px] lg:w-[675px] md:w-[550px] sm:w-[450px]`}
    >
      {content}
    </motion.div>
  );
};

export default Para;

//lg:1100
//Sm:500
//md:700

/* Solved:- A loop-hole in sliding para & Heading, when i shift the size of the screen it losses its responsiveness so i marking it as i will implement a Hook that will have all 'after' pixel value and will give according to the screen size. */
