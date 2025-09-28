"use client"
import { motion } from "framer-motion"

const WatermelonMark = ({ size = "lg", showText = true, animated = true }) => {
  const sizes = {
    sm: { container: "w-16 h-16", text: "text-lg" },
    md: { container: "w-24 h-24", text: "text-xl" },
    lg: { container: "w-32 h-32", text: "text-2xl" },
    xl: { container: "w-48 h-48", text: "text-4xl" },
  }

  const markVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className={`${sizes[size].container} relative flex items-center justify-center`}
        variants={animated ? markVariants : {}}
        initial={animated ? "initial" : ""}
        animate={animated ? "animate" : ""}
        whileHover={animated ? "hover" : ""}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-watermelon-400/30 rounded-full blur-xl"
          variants={animated ? pulseVariants : {}}
          animate={animated ? "animate" : ""}
        ></motion.div>

        {/* Main watermelon shape */}
        <div className="relative w-full h-full">
          {/* Green rind */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full"></div>

          {/* White layer */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-100 to-white rounded-full"></div>

          {/* Red flesh */}
          <div className="absolute inset-4 bg-gradient-to-br from-watermelon-400 to-watermelon-600 rounded-full"></div>

          {/* Center highlight */}
          <div className="absolute inset-6 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>

          {/* Seeds pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Multiple seeds positioned around */}
              {[...Array(8)].map((_, i) => {
                const angle = i * 45 * (Math.PI / 180)
                const radius = 20
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-3 bg-dark-800 rounded-full"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                )
              })}

              {/* Center LK text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`${sizes[size].text} font-display font-black text-white drop-shadow-lg`}>LK</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {showText && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-2xl text-dark-900 mb-1">LakirKhan</h2>
          <p className="font-sans text-primary-600 font-medium">Fitness Excellence</p>
        </motion.div>
      )}
    </div>
  )
}

export default WatermelonMark
