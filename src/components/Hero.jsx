import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[40px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            hello there, I am <span className={`text-[#915eff]`}>Tony</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a senior at UCSD majoring in Mathematics with minor in Computer
            Science. <br />
            My interests lie in full-stack web developement, IOS developement,
            and database. <br />I like playing piano and badminton.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-center top-2">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default SectionWrapper(Hero, "about");
