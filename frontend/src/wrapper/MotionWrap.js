import React from "react";
import {motion} from "framer-motion";

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
        transition={{duration: 0.5}}
        whileInView={{y: [, 50, 0], opacity: [0, 0, 1]}}
        className={`${classNames} app__flex`}
    >
      <Component/>
    </motion.div>
  )
}

export default MotionWrap
