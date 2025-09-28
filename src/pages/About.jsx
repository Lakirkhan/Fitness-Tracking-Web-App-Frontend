"use client"
import { motion } from "framer-motion"
import { Heart, Users, Target, Award, Lightbulb, Shield, Globe } from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/ScrollAnimations"
import { HoverCard, FloatingIcon } from "../components/InteractiveElements"
import WatermelonMark from "../components/WatermelonMark"

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Fitness",
      description:
        "We believe fitness should be accessible, enjoyable, and rewarding for everyone, regardless of their starting point.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Constantly pushing boundaries with cutting-edge technology to deliver the best fitness tracking experience.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a supportive community where users motivate each other to achieve their fitness goals.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your health data is sacred. We employ enterprise-grade security to protect your personal information.",
    },
  ]

  const team = [
    {
      name: "Lakir Khan",
      role: "Founder & CEO",
      description: "Fitness enthusiast and tech entrepreneur with 10+ years of experience in health technology.",
      avatar: "/placeholder.svg?key=team1",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Product",
      description: "Former fitness coach turned product manager, passionate about user-centered design.",
      avatar: "/placeholder.svg?key=team2",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      description: "Full-stack developer specializing in health tech and real-time data processing.",
      avatar: "/placeholder.svg?key=team3",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "LakirKhan was founded with a vision to make fitness tracking more intuitive and engaging.",
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Released our MVP with basic tracking features and gained our first 1,000 users.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Introduced AI-powered insights and personalized recommendations.",
    },
    {
      year: "2023",
      title: "Community Growth",
      description: "Reached 50,000+ active users and launched social features.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded internationally and introduced multi-language support.",
    },
  ]

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Globe, value: "25+", label: "Countries" },
    { icon: Target, value: "1M+", label: "Goals Achieved" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ]

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
                About
                <span className="text-gradient block">LakirKhan</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                We're on a mission to revolutionize fitness tracking by combining cutting-edge technology with intuitive
                design and a touch of fun.
              </p>
            </FadeInWhenVisible>
          </div>
        </section>
      </AnimatedBackground>

      {/* Story Section */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeInWhenVisible>
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">Our Story</h2>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      LakirKhan was born from a simple frustration: existing fitness trackers were either too
                      complicated or too boring. Our founder, Lakir Khan, wanted to create something that was both
                      powerful and delightful to use.
                    </p>
                    <p>
                      The watermelon theme isn't just for fun – it represents our core philosophy. Like a watermelon, we
                      believe fitness should be refreshing, energizing, and something you look forward to every day.
                    </p>
                    <p>
                      Today, we're proud to serve over 50,000 users worldwide, helping them achieve their fitness goals
                      with our innovative tracking platform.
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible direction="left">
                <div className="relative">
                  <FloatingIcon amplitude={10} duration={4}>
                    <img src="/fitness-team-working-together.jpg" alt="LakirKhan team" className="rounded-2xl shadow-2xl" />
                  </FloatingIcon>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32">
                    <WatermelonMark size="md" showText={false} animated={false} />
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at LakirKhan.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <HoverCard className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <FloatingIcon amplitude={5} duration={3 + index * 0.3}>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-2xl flex items-center justify-center mb-6">
                        <value.icon size={32} className="text-white" />
                      </div>
                    </FloatingIcon>

                    <h3 className="text-2xl font-display font-bold text-white mb-4">{value.title}</h3>

                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">Meet Our Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The passionate individuals behind LakirKhan's success.
                </p>
              </div>
            </FadeInWhenVisible>

            <StaggerContainer staggerDelay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <StaggerItem key={member.name}>
                    <HoverCard className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                      <FloatingIcon amplitude={5} duration={2.5 + index * 0.5}>
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                        />
                      </FloatingIcon>

                      <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">{member.name}</h3>

                      <p className="text-primary-600 font-semibold mb-4">{member.role}</p>

                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </AnimatedBackground>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300">Key milestones in LakirKhan's evolution.</p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer staggerDelay={0.2}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-watermelon-500"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <StaggerItem key={milestone.year}>
                    <div className="relative flex items-start space-x-8">
                      {/* Timeline dot */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{milestone.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <HoverCard className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-2xl font-display font-bold text-white mb-3">{milestone.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </HoverCard>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedBackground variant="features">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
                  LakirKhan by the Numbers
                </h2>
              </div>
            </FadeInWhenVisible>

            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <StaggerItem key={stat.label}>
                    <HoverCard className="text-center">
                      <FloatingIcon amplitude={5} duration={2 + index * 0.3}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-watermelon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <stat.icon size={28} className="text-white" />
                        </div>
                      </FloatingIcon>

                      <div className="text-4xl font-display font-bold text-dark-900 mb-2">{stat.value}</div>

                      <div className="text-gray-600 font-medium">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join the LakirKhan Family</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our growing community and start your fitness journey today.
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

export default About
