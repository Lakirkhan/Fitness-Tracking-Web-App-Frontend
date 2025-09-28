"use client"
import { motion } from "framer-motion"

const AnimatedBackground = ({ children, variant = "default" }) => {
  const variants = {
    default: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    },
    hero: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #22c55e 100%)",
    },
    features: {
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    },
  }

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="relative overflow-hidden" style={variants[variant]}>
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background:
              variant === "features" ? "linear-gradient(45deg, #22c55e, #ef4444)" : "rgba(255, 255, 255, 0.1)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AnimatedBackground
