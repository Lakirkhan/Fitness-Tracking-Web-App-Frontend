"use client"
import { motion } from "framer-motion"

const Loader = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }

  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const progressVariants = {
    animate: {
      width: ["0%", "100%"],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div className="loader-container" variants={containerVariants} initial="initial" exit="exit">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated watermelon loader */}
        <motion.div className="relative w-24 h-24" variants={loaderVariants} animate="animate">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>

          {/* Spinning gradient ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 border-r-watermelon-500 rounded-full"></div>

          {/* Inner watermelon */}
          <div className="absolute inset-2 bg-gradient-to-br from-primary-400 to-watermelon-500 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-lg font-display font-bold text-primary-600">LK</span>
            </div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div className="text-center" variants={textVariants} animate="animate">
          <h2 className="text-2xl font-display font-bold text-white mb-2">LakirKhan Fitness</h2>
          <p className="text-gray-300 font-sans">Preparing your fitness journey...</p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-watermelon-500 rounded-full"
            variants={progressVariants}
            animate="animate"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
