"use client"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowUp } from "lucide-react"
import Logo from "./Logo"
import WatermelonMark from "./WatermelonMark"

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Progress", href: "/progress" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-watermelon-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-primary-400 rounded-full"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" animated={false} />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your fitness journey with LakirKhan's comprehensive tracking platform. Monitor progress, achieve
              goals, and stay motivated every step of the way.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-watermelon-500/20 rounded-full flex items-center justify-center hover:from-primary-500 hover:to-watermelon-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display font-bold text-lg mb-6 text-primary-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display font-bold text-lg mb-6 text-watermelon-400">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-watermelon-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-watermelon-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display font-bold text-lg mb-6 text-primary-400">Get in Touch</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="text-primary-400" />
                <span>pathanlucky156@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="text-watermelon-400" />
                <span>7574812451</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="text-primary-400" />
                <span>Ahemdabad</span>
              </motion.div>
            </div>

            {/* Watermelon Mark */}
            <div className="mt-8">
              <WatermelonMark size="sm" showText={false} animated={false} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart size={16} className="text-watermelon-500 fill-current" />
            </motion.div>
            <span>by LakirKhan</span>
          </div>

          <div className="text-gray-400 text-sm">© 2025 LakirKhan Fitness Tracker. All rights reserved.</div>
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-watermelon-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
