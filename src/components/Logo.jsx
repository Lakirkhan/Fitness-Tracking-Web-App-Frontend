"use client"
import { motion } from "framer-motion"

const Logo = ({ size = "md", animated = true }) => {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-sm" },
    md: { container: "w-12 h-12", text: "text-lg" },
    lg: { container: "w-16 h-16", text: "text-xl" },
    xl: { container: "w-24 h-24", text: "text-3xl" },
  }

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  }

  const WatermelonIcon = () => (
    <motion.div
      className={`${sizes[size].container} relative flex items-center justify-center`}
      variants={animated ? logoVariants : {}}
      initial={animated ? "initial" : ""}
      animate={animated ? "animate" : ""}
      whileHover={animated ? "hover" : ""}
    >
      {/* Watermelon background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full"></div>

      {/* Watermelon flesh */}
      <div className="absolute inset-1 bg-gradient-to-br from-watermelon-400 to-watermelon-500 rounded-full"></div>

      {/* White center for text */}
      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
        <span className={`${sizes[size].text} font-bold text-primary-600 font-display`}>LK</span>
      </div>

      {/* Watermelon seeds */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-dark-800 rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-dark-800 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-dark-800 rounded-full"></div>
    </motion.div>
  )

  return (
    <div className="flex items-center space-x-3">
      <WatermelonIcon />

      <motion.div
        variants={animated ? textVariants : {}}
        initial={animated ? "initial" : ""}
        animate={animated ? "animate" : ""}
        className="flex flex-col"
      >
        <span className="font-display font-bold text-xl text-dark-900">LakirKhan</span>
        <span className="font-sans text-sm text-primary-600 -mt-1">Fitness Tracker</span>
      </motion.div>
    </div>
  )
}

export default Logo
