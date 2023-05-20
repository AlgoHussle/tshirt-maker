/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion"
import {useSnapshot} from "valtio"
import state from "../store"

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion"

const Home = () => {
  const snapshot = useSnapshot(state)

  return (
    <AnimatePresence>
      {snapshot.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
            src="./threejs.png"
            alt="three.js logo"
            className="w-8 h-8 object-contain"

            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headContainerAnimation}>
              <h1 className="head-text">
                
              </h1>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home