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
          <motion.header
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home