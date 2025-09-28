"use client"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, Trophy, Target, Activity, Zap } from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/ScrollAnimations"
import { HoverCard, PulseButton, FloatingIcon, GlowEffect, TypewriterText } from "../components/InteractiveElements"
import WatermelonMark from "../components/WatermelonMark"

const Home = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Trophy, value: "1M+", label: "Goals Achieved" },
    { icon: Target, value: "95%", label: "Success Rate" },
    { icon: Activity, value: "24/7", label: "Tracking" },
  ]

  const features = [
    {
      icon: Activity,
      title: "Real-time Tracking",
      description: "Monitor your workouts, heart rate, and progress in real-time with advanced analytics.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set personalized fitness goals and track your journey with intelligent recommendations.",
    },
    {
      icon: Zap,
      title: "Smart Insights",
      description: "Get AI-powered insights and recommendations to optimize your fitness routine.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "LakirKhan transformed my fitness journey. The tracking is incredibly detailed and motivating!",
      rating: 5,
      avatar: "/fit-woman-outdoors.png",
    },
    {
      name: "Mike Chen",
      role: "Personal Trainer",
      content: "I recommend LakirKhan to all my clients. The progress visualization is outstanding.",
      rating: 5,
      avatar: "/man-trainer.jpg",
    },
    {
      name: "Emma Davis",
      role: "Marathon Runner",
      content: "The best fitness tracker I've ever used. The watermelon theme is so unique and fun!",
      rating: 5,
      avatar: "/woman-runner.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedBackground variant="hero">
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInWhenVisible>
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <WatermelonMark size="lg" showText={false} />
              </motion.div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                <TypewriterText text="Transform Your" delay={0.5} />
                <br />
                <span className="text-gradient">
                  <TypewriterText text="Fitness Journey" delay={1.5} />
                </span>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Track your progress, achieve your goals, and stay motivated with LakirKhan's comprehensive fitness
                tracking platform.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.9}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <PulseButton className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl">
                  <span>Get Started Free</span>
                  <ArrowRight size={20} />
                </PulseButton>

                <motion.button
                  className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play size={20} />
                  </div>
                  <span className="font-medium">Watch Demo</span>
                </motion.button>
              </div>
            </FadeInWhenVisible>

            {/* Stats */}
            <FadeInWhenVisible delay={1.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <StaggerContainer key={stat.label}>
                    <StaggerItem>
                      <HoverCard className="text-center">
                        <FloatingIcon amplitude={5} duration={2 + index * 0.5}>
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                            <stat.icon size={24} className="text-white" />
                          </div>
                        </FloatingIcon>
                        <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-300 font-medium">{stat.label}</div>
                      </HoverCard>
                    </StaggerItem>
                  </StaggerContainer>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>
      </AnimatedBackground>

      {/* Features Section */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
                  Why Choose <span className="text-gradient">LakirKhan</span>?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the perfect blend of advanced technology and intuitive design that makes fitness tracking
                  effortless and enjoyable.
                </p>
              </div>
            </FadeInWhenVisible>

            <StaggerContainer staggerDelay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <StaggerItem key={feature.title}>
                    <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <GlowEffect color="primary">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                          <feature.icon size={32} className="text-white" />
                        </div>
                      </GlowEffect>

                      <h3 className="text-2xl font-display font-bold text-dark-900 mb-4">{feature.title}</h3>

                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </AnimatedBackground>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied users who have transformed their fitness journey with LakirKhan.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={testimonial.name}>
                  <HoverCard className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-200 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-watermelon-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the LakirKhan community today and take the first step towards achieving your fitness goals.
            </p>

            <PulseButton className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl">
              Start Free Trial
            </PulseButton>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}

export default Home
