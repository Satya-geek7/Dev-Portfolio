import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import SlidingHeading from "../../IndvCmpnts/SlidingHeading"
import Socials from "./Socials";
import ContactForm from "./ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = ({ trigger }) => {
  return (
    <section className="relative text-white lg:py-24 sm:py-14  px-4 sm:px-6 lg:px-12 ">
      <SlidingHeading
        Txt="Contact Me"
        trigger={trigger}
        initial={0}
        after={0}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24 relative z-10">
        <section>
          <Socials fadeup={fadeUp} />
        </section>
        <section>
          <ContactForm fadeup={fadeUp} />
        </section>
      </div>
    </section>
  );
};

export default Contact;
