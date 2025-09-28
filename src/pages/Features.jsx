"use client"
import { motion } from "framer-motion"
import {
  Activity,
  Heart,
  Target,
  Zap,
  BarChart3,
  Smartphone,
  Cloud,
  Shield,
  Users,
  Trophy,
  Calendar,
  PlayCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/ScrollAnimations"
import { HoverCard, FloatingIcon, GlowEffect } from "../components/InteractiveElements"

const Features = () => {
  const mainFeatures = [
    {
      icon: Activity,
      title: "Real-Time Activity Tracking",
      description:
        "Monitor your workouts, steps, calories, and heart rate in real-time with precision sensors and advanced algorithms.",
      features: ["Heart Rate Monitoring", "Step Counter", "Calorie Tracking", "Distance Measurement"],
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Target,
      title: "Smart Goal Setting",
      description:
        "Set personalized fitness goals and receive intelligent recommendations based on your progress and preferences.",
      features: ["Custom Goal Creation", "Progress Milestones", "Achievement Badges", "Smart Recommendations"],
      color: "from-watermelon-500 to-watermelon-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Gain deep insights into your fitness journey with comprehensive analytics and detailed progress reports.",
      features: ["Progress Charts", "Performance Trends", "Weekly Reports", "Comparative Analysis"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description:
        "Get personalized workout recommendations and health insights powered by machine learning algorithms.",
      features: ["Workout Suggestions", "Health Predictions", "Pattern Recognition", "Optimization Tips"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  const additionalFeatures = [
    { icon: Smartphone, title: "Mobile App", description: "Track on-the-go with our intuitive mobile application" },
    { icon: Cloud, title: "Cloud Sync", description: "Seamlessly sync your data across all devices" },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your health data is protected with enterprise-grade security",
    },
    { icon: Users, title: "Social Features", description: "Connect with friends and join fitness challenges" },
    { icon: Trophy, title: "Achievements", description: "Unlock badges and celebrate your milestones" },
    { icon: Calendar, title: "Workout Planning", description: "Plan and schedule your workouts in advance" },
  ]

  const workoutTypes = [
    { name: "Cardio", icon: Heart, count: "50+ Exercises" },
    { name: "Strength", icon: Target, count: "100+ Exercises" },
    { name: "Yoga", icon: Activity, count: "30+ Poses" },
    { name: "HIIT", icon: Zap, count: "25+ Workouts" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedBackground variant="hero">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInWhenVisible>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Powerful Features for
                <span className="text-gradient block">Complete Fitness Tracking</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Discover all the tools you need to transform your fitness journey with LakirKhan's comprehensive feature
                set.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>
      </AnimatedBackground>

      {/* Main Features */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">Core Features</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Everything you need to track, analyze, and optimize your fitness journey.
                </p>
              </div>
            </FadeInWhenVisible>

            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-16">
                {mainFeatures.map((feature, index) => (
                  <StaggerItem key={feature.title}>
                    <div
                      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
                    >
                      {/* Feature Content */}
                      <div className="flex-1">
                        <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                          <GlowEffect color="primary">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                            >
                              <feature.icon size={32} className="text-white" />
                            </div>
                          </GlowEffect>

                          <h3 className="text-3xl font-display font-bold text-dark-900 mb-4">{feature.title}</h3>

                          <p className="text-gray-600 text-lg mb-6 leading-relaxed">{feature.description}</p>

                          <div className="grid grid-cols-2 gap-3">
                            {feature.features.map((item, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle size={16} className="text-primary-500" />
                                <span className="text-gray-700 font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </HoverCard>
                      </div>

                      {/* Feature Visual */}
                      <div className="flex-1">
                        <FloatingIcon amplitude={8} duration={4}>
                          <div className="relative">
                            <div
                              className={`w-80 h-80 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto`}
                            >
                              <feature.icon size={120} className="text-white/80" />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <PlayCircle size={32} className="text-primary-500" />
                            </div>
                          </div>
                        </FloatingIcon>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </AnimatedBackground>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Additional Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                More tools to enhance your fitness experience and keep you motivated.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <StaggerItem key={feature.title}>
                  <HoverCard className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                    <FloatingIcon amplitude={5} duration={3 + index * 0.2}>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon size={28} className="text-white" />
                      </div>
                    </FloatingIcon>

                    <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>

                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Workout Types */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
                  Supported Workout Types
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Track any type of workout with our comprehensive exercise library.
                </p>
              </div>
            </FadeInWhenVisible>

            <StaggerContainer staggerDelay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {workoutTypes.map((workout, index) => (
                  <StaggerItem key={workout.name}>
                    <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                      <FloatingIcon amplitude={6} duration={2.5 + index * 0.3}>
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <workout.icon size={36} className="text-white" />
                        </div>
                      </FloatingIcon>

                      <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">{workout.name}</h3>

                      <p className="text-primary-600 font-semibold">{workout.count}</p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </AnimatedBackground>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-watermelon-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Experience All Features?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how LakirKhan can transform your fitness journey.
            </p>

            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </motion.button>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}

export default Features
