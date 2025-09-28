"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/ScrollAnimations"
import { HoverCard, FloatingIcon } from "../components/InteractiveElements"
import WatermelonMark from "../components/WatermelonMark"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Show success message (you can implement a toast notification here)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "pathanlucky156@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "7574812451",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Ahemdabad",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Available",
      description: "We're here when you need us",
    },
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      action: "Browse Articles",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other LakirKhan users",
      action: "Join Community",
    },
  ]

  const subjects = ["General Inquiry", "Technical Support", "Feature Request", "Bug Report", "Partnership", "Other"]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedBackground variant="hero">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInWhenVisible>
              <div className="mb-8">
                <WatermelonMark size="lg" showText={false} />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Get in
                <span className="text-gradient block">Touch</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Have questions, feedback, or need support? We'd love to hear from you. Our team is here to help you
                succeed on your fitness journey.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>
      </AnimatedBackground>

      {/* Contact Info Cards */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <StaggerItem key={info.title}>
                    <HoverCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                      <FloatingIcon amplitude={5} duration={2.5 + index * 0.3}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <info.icon size={28} className="text-white" />
                        </div>
                      </FloatingIcon>

                      <h3 className="text-xl font-display font-bold text-dark-900 mb-2">{info.title}</h3>

                      <p className="text-primary-600 font-semibold mb-2">{info.content}</p>

                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <FadeInWhenVisible>
                <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </HoverCard>
              </FadeInWhenVisible>

              {/* Support Options */}
              <div className="space-y-8">
                <FadeInWhenVisible direction="left">
                  <h2 className="text-3xl font-display font-bold text-dark-900 mb-6">Other Ways to Get Help</h2>
                </FadeInWhenVisible>

                <StaggerContainer staggerDelay={0.2}>
                  <div className="space-y-6">
                    {supportOptions.map((option, index) => (
                      <StaggerItem key={option.title}>
                        <HoverCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                          <div className="flex items-start space-x-4">
                            <FloatingIcon amplitude={3} duration={3 + index * 0.5}>
                              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                <option.icon size={24} className="text-white" />
                              </div>
                            </FloatingIcon>

                            <div className="flex-1">
                              <h3 className="text-xl font-display font-bold text-dark-900 mb-2">{option.title}</h3>
                              <p className="text-gray-600 mb-4">{option.description}</p>
                              <motion.button
                                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                                whileHover={{ x: 5 }}
                              >
                                {option.action} →
                              </motion.button>
                            </div>
                          </div>
                        </HoverCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>

                {/* FAQ Link */}
                <FadeInWhenVisible direction="left">
                  <HoverCard className="bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h3>
                    <p className="mb-6 opacity-90">Find quick answers to common questions about LakirKhan.</p>
                    <motion.button
                      className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View FAQ
                    </motion.button>
                  </HoverCard>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-6">Visit Our Office</h2>
              <p className="text-xl text-gray-300">Located in the heart of San Francisco's tech district.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <HoverCard className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm">123 Tech Street, Ahemdabad 94105</p>
              </div>
            </HoverCard>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}

export default Contact
