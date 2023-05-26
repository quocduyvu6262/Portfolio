import React from 'react'
import { fadeIn, textVariant } from "../utils/motion";
import {styles} from "../styles";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";



const Contact = () => {
  return (
    // <>
    //   <motion.div variants={textVariant()}>
    //     <p className={`${styles.sectionSubText} `}>My contact</p>
    //     <h2 className={`${styles.sectionHeadText}`}>Social.</h2>
    //   </motion.div>
    // </>
    <div>
      {/* <p className={`${styles.sectionSubText} `}>My contact</p>
      <h2 className={`${styles.sectionHeadText}`}>Social.</h2> */}

      <div className="flex flex-row flex-wrap justify-center gap-11 mt-10">
        {socials.map((social) => (
          <div className=" flex h-20 w-20 justify-center items-center cursor-pointer p-2" 
               key={social.name}
               onClick={() => window.open(social.link, "_blank")}
          >
            <img src={`.${social.icon}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");