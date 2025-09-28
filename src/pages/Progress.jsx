"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Target, Activity, Heart, BarChart3, PieChart, Clock, Award, Zap, ArrowUp, ArrowDown } from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/ScrollAnimations"
import { HoverCard, FloatingIcon } from "../components/InteractiveElements"

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  const periods = [
    { key: "week", label: "This Week" },
    { key: "month", label: "This Month" },
    { key: "year", label: "This Year" },
  ]

  const stats = [
    {
      icon: Activity,
      title: "Total Workouts",
      value: "47",
      change: "+12%",
      trend: "up",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Clock,
      title: "Active Minutes",
      value: "1,240",
      change: "+8%",
      trend: "up",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Goals Achieved",
      value: "23",
      change: "+15%",
      trend: "up",
      color: "from-watermelon-500 to-watermelon-600",
    },
    {
      icon: Heart,
      title: "Avg Heart Rate",
      value: "142 BPM",
      change: "-3%",
      trend: "down",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const weeklyData = [
    { day: "Mon", workouts: 2, calories: 450, duration: 60 },
    { day: "Tue", workouts: 1, calories: 320, duration: 45 },
    { day: "Wed", workouts: 3, calories: 680, duration: 90 },
    { day: "Thu", workouts: 1, calories: 280, duration: 40 },
    { day: "Fri", workouts: 2, calories: 520, duration: 75 },
    { day: "Sat", workouts: 4, calories: 890, duration: 120 },
    { day: "Sun", workouts: 1, calories: 200, duration: 30 },
  ]

  const achievements = [
    {
      icon: Award,
      title: "First Marathon",
      description: "Completed your first marathon distance",
      date: "2 days ago",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: Zap,
      title: "Streak Master",
      description: "30-day workout streak achieved",
      date: "1 week ago",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Target,
      title: "Goal Crusher",
      description: "Exceeded monthly calorie goal by 150%",
      date: "2 weeks ago",
      color: "from-watermelon-500 to-watermelon-600",
    },
  ]

  const workoutTypes = [
    { name: "Cardio", percentage: 45, color: "bg-primary-500" },
    { name: "Strength", percentage: 30, color: "bg-watermelon-500" },
    { name: "Yoga", percentage: 15, color: "bg-blue-500" },
    { name: "HIIT", percentage: 10, color: "bg-purple-500" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedBackground variant="hero">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInWhenVisible>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Track Your
                <span className="text-gradient block">Progress Journey</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Visualize your fitness achievements with comprehensive analytics and detailed progress tracking.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>
      </AnimatedBackground>

      {/* Progress Dashboard */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Period Selector */}
            <FadeInWhenVisible>
              <div className="flex justify-center mb-12">
                <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
                  {periods.map((period) => (
                    <button
                      key={period.key}
                      onClick={() => setSelectedPeriod(period.key)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedPeriod === period.key
                          ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md"
                          : "text-gray-600 hover:text-primary-600"
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Stats Cards */}
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <StaggerItem key={stat.title}>
                    <HoverCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                        >
                          <stat.icon size={24} className="text-white" />
                        </div>
                        <div
                          className={`flex items-center space-x-1 text-sm font-medium ${
                            stat.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {stat.trend === "up" ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                          <span>{stat.change}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-dark-900 mb-1">{stat.value}</h3>

                      <p className="text-gray-600 font-medium">{stat.title}</p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Weekly Activity Chart */}
              <FadeInWhenVisible>
                <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-display font-bold text-dark-900">Weekly Activity</h3>
                    <BarChart3 size={24} className="text-primary-500" />
                  </div>

                  <div className="space-y-4">
                    {weeklyData.map((day, index) => (
                      <motion.div
                        key={day.day}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                        <div className="flex-1">
                          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="bg-gradient-to-r from-primary-500 to-watermelon-500 h-full rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${(day.workouts / 4) * 100}%` }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                            />
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">{day.workouts} workouts</div>
                      </motion.div>
                    ))}
                  </div>
                </HoverCard>
              </FadeInWhenVisible>

              {/* Workout Distribution */}
              <FadeInWhenVisible>
                <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-display font-bold text-dark-900">Workout Distribution</h3>
                    <PieChart size={24} className="text-primary-500" />
                  </div>

                  <div className="space-y-4">
                    {workoutTypes.map((type, index) => (
                      <motion.div
                        key={type.name}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-700">{type.name}</span>
                            <span className="text-sm text-gray-600">{type.percentage}%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`${type.color} h-full rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${type.percentage}%` }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </HoverCard>
              </FadeInWhenVisible>
            </div>

            {/* Achievements */}
            <FadeInWhenVisible>
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-dark-900 mb-8 text-center">Recent Achievements</h2>

                <StaggerContainer staggerDelay={0.2}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                      <StaggerItem key={achievement.title}>
                        <HoverCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                          <FloatingIcon amplitude={5} duration={3 + index * 0.5}>
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                            >
                              <achievement.icon size={28} className="text-white" />
                            </div>
                          </FloatingIcon>

                          <h3 className="text-xl font-display font-bold text-dark-900 mb-2">{achievement.title}</h3>

                          <p className="text-gray-600 mb-3 leading-relaxed">{achievement.description}</p>

                          <p className="text-sm text-primary-600 font-medium">{achievement.date}</p>
                        </HoverCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </AnimatedBackground>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-watermelon-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Start Tracking Your Progress Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already tracking their fitness journey with LakirKhan.
            </p>

            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}

export default Progress
