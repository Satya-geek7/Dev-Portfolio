import React from "react";
import SlidingHeading from "../IndvCmpnts/SlidingHeading";
import SkillsMap from "../IndvCmpnts/SkillsMap";

const SkillSection = ({ trigger }) => {
  return (
    <div className="w-full pl-3">
      <SlidingHeading Txt="SKILLS" trigger={trigger} initial={0} after={0} />
      <section>
        <SkillsMap trigger={trigger} />
      </section>
    </div>
  );
};

export default SkillSection;
