import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Engineer . . .",
        2000,
        "React.Js Developer . . .",
        2000,
        "JavaScript Engineer . . .",
        2000,
        "Web Developer . . .",
        2000,
        () => {},
      ]}
      speed={50}
      repeat={Infinity}
      wrapper="span"
      className="lg:text-[33px] md:text-[30px] sm:text-[26px] text-[26px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold"
    />
  );
}

export default TypingText;
