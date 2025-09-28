"use client"
import { motion, useScroll, useTransform } from "framer-motion"

export const FadeInWhenVisible = ({ children, direction = "up", delay = 0 }) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, direction = "up" }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  }

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          ...directions[direction],
        },
        animate: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const ParallaxContainer = ({ children, offset = 50 }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, offset])

  return <motion.div style={{ y }}>{children}</motion.div>
}

export const ScaleOnScroll = ({ children, scale = [1, 1.1] }) => {
  const { scrollYProgress } = useScroll()
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale)

  return <motion.div style={{ scale: scaleValue }}>{children}</motion.div>
}
