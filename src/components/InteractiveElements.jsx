"use client"
import { motion } from "framer-motion"

export const HoverCard = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`hover-lift ${className}`}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const PulseButton = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.4)",
          "0 0 0 10px rgba(34, 197, 94, 0)",
          "0 0 0 0 rgba(34, 197, 94, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export const FloatingIcon = ({ children, amplitude = 10, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export const GlowEffect = ({ children, color = "primary" }) => {
  const colors = {
    primary: "rgba(34, 197, 94, 0.3)",
    watermelon: "rgba(239, 68, 68, 0.3)",
    white: "rgba(255, 255, 255, 0.3)",
  }

  return (
    <motion.div
      className="relative"
      whileHover={{
        filter: `drop-shadow(0 0 20px ${colors[color]})`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export const TypewriterText = ({ text, delay = 0, speed = 0.05 }) => {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}
