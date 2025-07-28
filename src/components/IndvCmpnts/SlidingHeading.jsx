import React from "react";
import { motion } from "framer-motion";
import useResponsiveValue from "../../Hooks/UseResponsiveValue";

const SlidingHeading = ({
  Txt,
  trigger,
  initial = 0,
  after = { sm: 0, md: 0, lg: 0 },
}) => {
  const responsiveAfter = useResponsiveValue(after);

  return (
    <motion.div
      initial={{ x: initial }}
      animate={{ x: trigger ? responsiveAfter : 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-white lg:text-[33px] md:text-[28px] sm:text-[25px] text-[25px] md:w-72 font-semibold w-fit decoration-rose-400 underline underline-offset-[10px]"
    >
      {Txt}
    </motion.div>
  );
};

export default SlidingHeading;

//lg:1100
//Sm:500
//md:700

/* Solved:- A loop-hole in sliding para & Heading, when i shift the size of the screen it losses its responsiveness so i marking it as i will implement a object that will have all 'after' pixel value and will give according to the screen size. */
