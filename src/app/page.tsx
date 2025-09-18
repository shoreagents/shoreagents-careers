"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { StickyScrollReveal } from "@/components/ui/sticky-scroll-reveal";
import { Heart, Award, Handshake, TrendingUp, FileText, Video, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Home() {
  // State for job filtering
  const [activeFilter, setActiveFilter] = useState("Featured");

  // Sample career opportunities data for the parallax effect
  const careerOpportunities = [
    {
      title: "Senior Software Engineer",
      link: "#",
      thumbnail: "/images/IMG_6783.JPG"
    },
    {
      title: "Product Manager",
      link: "#",
      thumbnail: "/images/IMG_6250.JPG"
    },
    {
      title: "UX Designer",
      link: "#",
      thumbnail: "/images/IMG_8370.JPG"
    },
    {
      title: "Data Scientist",
      link: "#",
      thumbnail: "/images/IMG_8210.JPG"
    },
    {
      title: "DevOps Engineer",
      link: "#",
      thumbnail: "/images/IMG_8532.JPG"
    },
    {
      title: "Marketing Manager",
      link: "#",
      thumbnail: "/images/IMG_8453.JPG"
    },
    {
      title: "Sales Director",
      link: "#",
      thumbnail: "/images/IMG_6581.JPG"
    },
    {
      title: "Frontend Developer",
      link: "#",
      thumbnail: "/images/IMG_8552.JPG"
    },
    {
      title: "Backend Developer",
      link: "#",
      thumbnail: "/images/IMG_8300.JPG"
    },
    {
      title: "Full Stack Engineer",
      link: "#",
      thumbnail: "/images/IMG_6593.JPG"
    },
    {
      title: "AI/ML Engineer",
      link: "#",
      thumbnail: "/images/IMG_6783.JPG"
    },
    {
      title: "Cybersecurity Analyst",
      link: "#",
      thumbnail: "/images/IMG_6250.JPG"
    },
    {
      title: "Cloud Architect",
      link: "#",
      thumbnail: "/images/IMG_8370.JPG"
    },
    {
      title: "Mobile Developer",
      link: "#",
      thumbnail: "/images/IMG_8210.JPG"
    },
    {
      title: "Technical Writer",
      link: "#",
      thumbnail: "/images/IMG_8532.JPG"
    }
  ];

  // Job data with shift information
  const jobs = [
    {
      id: 1,
      title: "Senior Customer Service Representative",
      category: "Customer Service",
      location: "Clark Freeport Zone, Angeles City",
      employmentType: "Full-time",
      salary: "₱25,000 - ₱35,000",
      shift: "Night Shift",
      description: "Join our dynamic customer service team and provide exceptional support to international clients. You'll handle customer inquiries, resolve issues, and ensure customer satisfaction while growing your career in a supportive environment with comprehensive training and advancement opportunities.",
      requirements: [
        "Excellent English communication skills (written and verbal)",
        "2-3 years customer service experience",
        "Comprehensive health insurance (HMO)",
        "Performance-based bonuses",
        "Career advancement opportunities"
      ]
    },
    {
      id: 2,
      title: "Sales Development Representative",
      category: "Sales",
      location: "Clark Freeport Zone, Angeles City",
      employmentType: "Full-time",
      salary: "₱22,000 - ₱40,000",
      shift: "Day Shift",
      description: "Generate leads and qualify prospects for our growing sales team. Join a high-energy environment where your sales skills will directly impact company growth and your earning potential is unlimited. Benefit from comprehensive training and clear career progression paths.",
      requirements: [
        "1+ years of sales experience",
        "CRM proficiency (Salesforce, HubSpot, etc.)",
        "High commission structure",
        "Monthly sales incentives and bonuses",
        "Clear career progression path"
      ]
    }
  ];

  // Filter jobs based on active filter
  const filteredJobs = jobs.filter(job => {
    if (activeFilter === "Featured") return true;
    if (activeFilter === "All Positions") return true;
    return job.shift === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b bg-gray-800/80 backdrop-blur-sm relative z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
              <h1 className="text-2xl font-bold text-white">ShoreAgents</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#jobs" className="text-gray-300 hover:text-white">Jobs</a>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Comprehensive Hero Page */}
      <section className="relative py-24 px-6 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/IMG_8025_OPTIMIZED.jpg" 
            alt="ShoreAgents Office Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec297b] via-[#f47fb0] to-[#f7a9ca]">
                    SHOREAGENTS CAREERS
                  </span>
                </motion.h1>
                
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="text-[#0098ff]">BUILDING</span>{" "}
                  <span className="text-[#00e915]">BRIGHTER</span>{" "}
                  <span className="text-[#ec297b]">FUTURES</span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Join our dynamic team of world-class virtual assistants and customer service professionals. 
                Experience a workplace where innovation meets opportunity, and every team member becomes a superstar.
              </motion.p>

              {/* Key Statistics */}
              <motion.div 
                className="grid grid-cols-3 gap-6 py-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec297b] via-[#f47fb0] to-[#f7a9ca]">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec297b] via-[#f47fb0] to-[#f7a9ca]">200+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec297b] via-[#f47fb0] to-[#f7a9ca]">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button 
                  className={twMerge(
                    "px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full",
                    "transition-all duration-300 shadow-lg hover:shadow-xl text-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "relative overflow-hidden group"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Apply Now</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button 
                  className={twMerge(
                    "px-10 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-full",
                    "border-2 border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "relative overflow-hidden group"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Tour Our Office</span>
                  <motion.div 
                    className="absolute inset-0 bg-blue-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center justify-center space-x-8 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-white">Join 200+ professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-white">4.9/5 rating</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Sticky Scroll Reveal Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose ShoreAgents?
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the unique advantages of working with us through our interactive scroll experience
            </p>
          </motion.div>
          
          <StickyScrollReveal
            content={[
              {
                title: "World-Class Technology",
                description: "Experience cutting-edge technology and modern equipment that empowers your productivity. Our state-of-the-art infrastructure ensures you have everything you need to excel in your role.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💻</div>
                      <h4 className="text-xl font-bold">Modern Workstations</h4>
                      <p className="text-sm opacity-90">Latest computers & dual monitors</p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Professional Growth",
                description: "Join a company that invests in your development. We provide comprehensive training programs, mentorship opportunities, and clear career advancement paths.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <h4 className="text-xl font-bold">Career Development</h4>
                      <p className="text-sm opacity-90">Training & advancement opportunities</p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Amazing Work Environment",
                description: "Work in a modern, comfortable office space designed for productivity and collaboration. Enjoy premium amenities and a supportive team culture.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏢</div>
                      <h4 className="text-xl font-bold">Modern Office</h4>
                      <p className="text-sm opacity-90">Clark Freeport Zone</p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Competitive Benefits",
                description: "Enjoy comprehensive benefits including health insurance, performance bonuses, team events, and government-mandated benefits. We take care of our team members.",
                content: (
                  <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎁</div>
                      <h4 className="text-xl font-bold">Great Benefits</h4>
                      <p className="text-sm opacity-90">Health insurance & bonuses</p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Employee Testimonials Carousel */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Employees Say
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hear from our amazing team members
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Customer Service Representative",
                quote: "ShoreAgents has given me incredible growth opportunities. The training programs and supportive team environment helped me advance my career faster than I ever imagined.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Sales Development Representative", 
                quote: "The work-life balance here is amazing. Great benefits, competitive salary, and a fun workplace culture. I love coming to work every day!",
                rating: 5
              },
              {
                name: "Maria Santos",
                role: "Technical Support Specialist",
                quote: "The technology and tools we use are cutting-edge. Management truly cares about employee development and provides all the resources we need to succeed.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Certifications/Awards */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Recognitions & Certifications
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our commitment to excellence recognized by industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "ISO 27001 Certified", description: "Information Security Management" },
              { title: "BPO Excellence Award", description: "Outstanding Service Provider 2023" },
              { title: "Best Workplace", description: "Employee Satisfaction Recognition" },
              { title: "Quality Assurance", description: "99.5% Service Level Agreement" }
            ].map((cert, index) => (
              <motion.div 
                key={cert.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Parallax Section */}
      <HeroParallax products={careerOpportunities} />

      {/* Features Section */}
      <section className="py-16 px-6" style={{backgroundColor: '#f8fafc'}}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* First Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Be part of our growing team and become the next ShoreAgents Superstar!
              </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                Join a diverse team of passionate professionals who are reshaping the future of virtual assistance. 
                At ShoreAgents, every team member is valued, supported, and empowered to reach their full potential.
              </p>
              </div>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: '#99d6ff'}}>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Heart className="h-5 w-5" style={{color: '#99d6ff'}} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-semibold text-gray-900 text-sm">Inclusive Culture</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">We celebrate diversity and create an environment where everyone belongs</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: '#99f6a1'}}>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Award className="h-5 w-5" style={{color: '#99f6a1'}} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-semibold text-gray-900 text-sm">Recognition Program</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">Monthly superstar awards and performance-based incentives</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: '#f7a9ca'}}>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Handshake className="h-5 w-5" style={{color: '#f7a9ca'}} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-semibold text-gray-900 text-sm">Team Collaboration</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">Cross-functional teams working together on exciting projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: '#99d6ff'}}>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <TrendingUp className="h-5 w-5" style={{color: '#99d6ff'}} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-semibold text-gray-900 text-sm">Fast Growth</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">Rapid career advancement opportunities for high performers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Column - Background Image */}
            <div 
              className="relative w-full h-80 lg:h-96 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: "url('/images/IMG_8300.JPG')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NumberFun Workplace Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              NUMBERFUN WORKPLACE
            </h3>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Experience a workplace that goes beyond expectations. Our modern office combines productivity with fun, 
              creating an environment where you'll love to work every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <div className="h-32 w-full rounded-xl overflow-hidden mb-4 shadow-md">
                <img 
                  src="/images/IMG_6250.JPG" 
                  alt="Free Coffee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-lg">Free Coffee</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Premium coffee available 24/7</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <div className="h-32 w-full rounded-xl overflow-hidden mb-4 shadow-md">
                <img 
                  src="/images/IMG_6593.JPG" 
                  alt="High-Speed Internet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-lg">High-Speed Internet</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Enterprise-grade fiber connection for seamless work</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <div className="h-32 w-full rounded-xl overflow-hidden mb-4 shadow-md">
                <img 
                  src="/images/IMG_8532.JPG" 
                  alt="Free Parking" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-lg">Free Parking</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Secure parking space</p>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <div className="h-32 w-full rounded-xl overflow-hidden mb-4 shadow-md">
                <img 
                  src="/images/IMG_8453.JPG" 
                  alt="Fun Events" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-lg">Fun Events</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Monthly team building and celebration events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Virtual Tour Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              TAKE A VIRTUAL TOUR
          </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our modern office facilities and discover the technology and amenities that make ShoreAgents the perfect workplace.
            </p>
          </motion.div>

          {/* Interactive Office Walkthrough */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interactive Office Walkthrough</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Experience our office through 360° photos and virtual reality. Navigate through different areas 
                    and get a real feel for our workspace before you even step foot inside.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">360° panoramic views</span>
          </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Interactive hotspots</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Detailed facility information</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img 
                    src="/images/IMG_8300.JPG" 
                    alt="Office Walkthrough" 
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Tour Available</span>
              </div>
              </div>
            </div>
              </div>
            </div>
          </motion.div>

          {/* Technology & Workspace - Combined Sticky Scroll Reveal */}
          <section className="py-20 px-6 bg-gray-900">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
                  Technology & Workspace
                </h3>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Discover our amazing office amenities designed for productivity and comfort with state-of-the-art technology and equipment to support your success
                </p>
              </motion.div>
              
              <StickyScrollReveal
                content={[
                  {
                    title: "High-Speed Internet",
                    description: "Experience lightning-fast enterprise-grade fiber connection that ensures seamless communication and productivity. Our robust internet infrastructure supports all your work needs without interruption.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_6250.JPG" 
                          alt="ShoreAgents Office - High-Speed Internet Infrastructure" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🌐</div>
                          <h4 className="text-lg font-bold">Enterprise Fiber</h4>
                          <p className="text-sm opacity-90">Ultra-fast connectivity</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Modern Workstations",
                    description: "Work with the latest computers and dual monitors in ergonomic setups designed for maximum productivity. Our workstations are equipped with powerful hardware to handle any task efficiently.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_6581.JPG" 
                          alt="ShoreAgents Office - Modern Workstations" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">💻</div>
                          <h4 className="text-lg font-bold">Dual Monitors</h4>
                          <p className="text-sm opacity-90">Latest computers & setups</p>
            </div>
                      </div>
                    ),
                  },
                  {
                    title: "Modern Workspace",
                    description: "Open collaborative areas with ergonomic furniture designed for maximum productivity. Our modern workspace features comfortable seating, adjustable desks, and plenty of natural light to create an inspiring work environment.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_6593.JPG" 
                          alt="ShoreAgents Office - Modern Workspace" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🏢</div>
                          <h4 className="text-lg font-bold">Open Layout</h4>
                          <p className="text-sm opacity-90">Ergonomic furniture & natural light</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Communication Systems",
                    description: "Advanced VoIP and video conferencing systems that connect you seamlessly with clients and team members worldwide. Crystal-clear communication for professional interactions.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_6783.JPG" 
                          alt="ShoreAgents Office - Communication Systems" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">📞</div>
                          <h4 className="text-lg font-bold">VoIP Systems</h4>
                          <p className="text-sm opacity-90">Video conferencing ready</p>
            </div>
                      </div>
                    ),
                  },
                  {
                    title: "Game Room",
                    description: "Relax and unwind with gaming consoles and board games in our dedicated recreation area. Take breaks between work sessions to recharge and connect with colleagues in a fun, relaxed environment.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                <img 
                  src="/images/IMG_8210.JPG" 
                          alt="ShoreAgents Office - Game Room" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🎮</div>
                          <h4 className="text-lg font-bold">Recreation Zone</h4>
                          <p className="text-sm opacity-90">Gaming consoles & board games</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Security Systems",
                    description: "24/7 monitoring and access control systems ensure your safety and data security. Advanced security measures protect both physical and digital assets.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_8300.JPG" 
                          alt="ShoreAgents Office - Security Systems" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🔒</div>
                          <h4 className="text-lg font-bold">24/7 Security</h4>
                          <p className="text-sm opacity-90">Access control & monitoring</p>
            </div>
                      </div>
                    ),
                  },
                  {
                    title: "Premium Coffee",
                    description: "High-quality coffee and beverages available 24/7 to keep you energized throughout your workday. Our premium coffee station features professional-grade equipment and a variety of beverage options.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                <img 
                  src="/images/IMG_8370.JPG" 
                          alt="ShoreAgents Office - Premium Coffee Station" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">☕</div>
                          <h4 className="text-lg font-bold">Coffee Station</h4>
                          <p className="text-sm opacity-90">Premium beverages 24/7</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Backup Power",
                    description: "Uninterrupted power supply systems ensure continuous operation even during power outages. Never lose work due to power interruptions with our reliable backup systems.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                <img 
                  src="/images/IMG_8453.JPG" 
                          alt="ShoreAgents Office - Backup Power Systems" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">⚡</div>
                          <h4 className="text-lg font-bold">UPS Systems</h4>
                          <p className="text-sm opacity-90">Uninterrupted power supply</p>
              </div>
                </div>
                    ),
                  },
                  {
                    title: "Meeting Rooms",
                    description: "State-of-the-art conference rooms with video conferencing capabilities for professional meetings and client presentations. Equipped with modern technology and comfortable seating for productive discussions.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_8532.JPG" 
                          alt="ShoreAgents Office - Meeting Rooms" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">💼</div>
                          <h4 className="text-lg font-bold">Conference Rooms</h4>
                          <p className="text-sm opacity-90">Video conferencing ready</p>
              </div>
            </div>
                    ),
                  },
                  {
                    title: "Climate Control",
                    description: "Centralized air conditioning systems maintain optimal temperature and air quality for comfortable working conditions. Climate-controlled environment for year-round productivity.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_8552.JPG" 
                          alt="ShoreAgents Office - Climate Control" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">❄️</div>
                          <h4 className="text-lg font-bold">Climate Control</h4>
                          <p className="text-sm opacity-90">Centralized AC systems</p>
          </div>
                      </div>
                    ),
                  },
                  {
                    title: "Dining Area",
                    description: "Spacious cafeteria with comfortable seating where you can enjoy meals and socialize with colleagues. Our dining area provides a welcoming space for lunch breaks and team bonding moments.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <img 
                          src="/images/IMG_6250.JPG" 
                          alt="ShoreAgents Office - Dining Area" 
                  className="w-full h-full object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🍽️</div>
                          <h4 className="text-lg font-bold">Cafeteria</h4>
                          <p className="text-sm opacity-90">Comfortable dining & socializing</p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </section>

        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              WHY CHOOSE SHOREAGENTS?
          </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what makes ShoreAgents the perfect place to build your career and grow professionally.
            </p>
          </motion.div>

          {/* Company Culture & Values */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Culture & Values
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Inclusive Environment</h5>
                      <p className="text-gray-600 dark:text-gray-300">We celebrate diversity and create an environment where everyone feels valued and respected.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Growth Mindset</h5>
                      <p className="text-gray-600 dark:text-gray-300">Continuous learning and development opportunities to help you reach your full potential.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h5>
                      <p className="text-gray-600 dark:text-gray-300">Teamwork and open communication are at the heart of everything we do.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/IMG_8370.JPG" 
                  alt="ShoreAgents Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h5 className="text-xl font-bold mb-2">Our Amazing Team</h5>
                  <p className="text-sm opacity-90">Building the future together</p>
              </div>
                </div>
            </motion.div>
              </div>

          {/* Mission Statement */}
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission Statement
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                "To empower our employees with exceptional career opportunities while delivering outstanding 
                BPO services to our clients worldwide. We are committed to fostering a culture of innovation, 
                growth, and excellence that benefits both our team members and the communities we serve."
              </p>
            </div>
          </motion.div>

          {/* Employee Benefits */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Comprehensive Benefits Package
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Health Insurance</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive HMO coverage for you and your dependents</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Bonuses</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Monthly incentives and performance-based rewards</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Career Development</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Training programs and advancement opportunities</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Team Events</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Monthly team building and celebration activities</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Government Benefits</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">SSS, PAGIBIG, and PhilHealth contributions</p>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Work-Life Balance</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Flexible schedules and supportive work environment</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Development Programs */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Professional Development Programs
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills Training</h5>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Communication and soft skills workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Technical skills certification programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Leadership development courses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Industry-specific training modules</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Career Advancement</h5>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Internal promotion opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Mentorship programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cross-departmental projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Performance-based salary increases</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Our Modern Office Location
            </h4>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Clark Freeport Zone</h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Located in the heart of Clark Freeport Zone, Angeles City, our modern office provides easy access 
                    and a professional environment for all our employees.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Free shuttle service from Clark Main Gate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Free parking for all employees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Modern facilities and equipment</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img 
                    src="/images/IMG_8300.JPG" 
                    alt="Clark Freeport Zone Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>


      {/* Current Openings Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              BPO JOB POSTINGS
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Discover exciting career opportunities in our growing BPO company.<br />
              Find your perfect role and start your journey to becoming a ShoreAgents superstar!
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                className="px-6 py-2 rounded-lg font-medium transition-colors hover:opacity-80"
                style={{
                  backgroundColor: activeFilter === "Featured" ? "#99d6ff" : "#f5f5f5",
                  color: "#000000 !important"
                }}
                onClick={() => setActiveFilter("Featured")}
              >
                Featured
              </button>
              <button 
                className="px-6 py-2 rounded-lg font-medium transition-colors hover:opacity-80"
                style={{
                  backgroundColor: activeFilter === "All Positions" ? "#99f6a1" : "#f5f5f5",
                  color: "#000000 !important"
                }}
                onClick={() => setActiveFilter("All Positions")}
              >
                All Positions
              </button>
              <button 
                className="px-6 py-2 rounded-lg font-medium transition-colors hover:opacity-80"
                style={{
                  backgroundColor: activeFilter === "Night Shift" ? "#f7a9ca" : "#f5f5f5",
                  color: "#000000 !important"
                }}
                onClick={() => setActiveFilter("Night Shift")}
              >
                Night Shift
              </button>
              <button 
                className="px-6 py-2 rounded-lg font-medium transition-colors hover:opacity-80"
                style={{
                  backgroundColor: activeFilter === "Day Shift" ? "#99d6ff" : "#f5f5f5",
                  color: "#000000 !important"
                }}
                onClick={() => setActiveFilter("Day Shift")}
              >
                Day Shift
              </button>
            </div>
          </div>

          {/* Job Postings */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex-1 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-black text-sm font-medium rounded-full" style={{backgroundColor: '#99d6ff'}}>Featured</span>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full text-black`}
                      style={{
                        backgroundColor: job.shift === "Night Shift" ? "#f7a9ca" : "#99f6a1"
                      }}>
                        {job.shift}
                      </span>
                    </div>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h5>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{job.category}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.employmentType}</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-lg font-bold text-green-600">{job.salary}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                    Apply Now
                  </button>
                </div>
                
                {/* Collapsible Description */}
                <details className="group">
                  <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium mb-3">
                    View Job Details
                  </summary>
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.description}
                    </p>
                    <div>
                      <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Key Requirements:</h6>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        {job.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced General Application Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DON'T SEE YOUR PERFECT ROLE?
          </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals. Submit your comprehensive application 
              and we'll keep you in mind for future opportunities!
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
          </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@email.com" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+63 912 345 6789" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Work Experience</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPosition" className="text-gray-700 dark:text-gray-300">Current/Last Position</Label>
                      <Input 
                        id="currentPosition" 
                        placeholder="Customer Service Representative" 
                        className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentCompany" className="text-gray-700 dark:text-gray-300">Current/Last Company</Label>
                      <Input 
                        id="currentCompany" 
                        placeholder="ABC Company" 
                        className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-gray-700 dark:text-gray-300">Years of Experience</Label>
                    <select 
                      id="experience" 
                      className="w-full rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Education</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education" className="text-gray-700 dark:text-gray-300">Highest Education</Label>
                    <select 
                      id="education" 
                      className="w-full rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700"
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="vocational">Vocational</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fieldOfStudy" className="text-gray-700 dark:text-gray-300">Field of Study</Label>
                    <Input 
                      id="fieldOfStudy" 
                      placeholder="Business Administration" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Qualifications</h4>
                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300">Relevant Skills</Label>
                  <Textarea 
                    id="skills" 
                    placeholder="List your key skills (e.g., Customer Service, Communication, Microsoft Office, CRM Systems)" 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                  />
                </div>
              </div>

              {/* Position Interest */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Position Preferences</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="positionInterest" className="text-gray-700 dark:text-gray-300">Position of Interest</Label>
                    <select 
                      id="positionInterest" 
                      className="w-full rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700"
                    >
                      <option value="">Select preferred position</option>
                      <option value="customer-service">Customer Service Representative</option>
                      <option value="sales">Sales Development Representative</option>
                      <option value="technical-support">Technical Support Specialist</option>
                      <option value="administrative">Administrative Assistant</option>
                      <option value="team-lead">Team Lead</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shiftPreference" className="text-gray-700 dark:text-gray-300">Shift Preference</Label>
                    <select 
                      id="shiftPreference" 
                      className="w-full rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700"
                    >
                      <option value="">Select preferred shift</option>
                      <option value="day">Day Shift (6 AM - 3 PM)</option>
                      <option value="night">Night Shift (8 PM - 5 AM)</option>
                      <option value="mid">Mid Shift (2 PM - 11 PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Documents</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-gray-700 dark:text-gray-300">Resume/CV *</Label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                      <input type="file" id="resume" accept=".pdf,.doc,.docx" className="hidden" required />
                      <label htmlFor="resume" className="cursor-pointer">
                        <div className="text-gray-500 dark:text-gray-400 mb-2">
                          <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Click to upload resume (PDF, DOC, DOCX)</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter" className="text-gray-700 dark:text-gray-300">Cover Letter</Label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                      <input type="file" id="coverLetter" accept=".pdf,.doc,.docx" className="hidden" />
                      <label htmlFor="coverLetter" className="cursor-pointer">
                        <div className="text-gray-500 dark:text-gray-400 mb-2">
                          <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Click to upload cover letter (Optional)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter Text */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Cover Letter</h4>
                <div className="space-y-2">
                  <Label htmlFor="coverLetterText" className="text-gray-700 dark:text-gray-300">Tell us why you want to join ShoreAgents</Label>
                  <Textarea 
                    id="coverLetterText" 
                    placeholder="Write a brief cover letter explaining your interest in joining ShoreAgents and how you can contribute to our team..." 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                  />
                </div>
              </div>

              {/* References */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">References</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="refName" className="text-gray-700 dark:text-gray-300">Reference Name</Label>
                      <Input 
                        id="refName" 
                        placeholder="Jane Smith" 
                        className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refPosition" className="text-gray-700 dark:text-gray-300">Position</Label>
                      <Input 
                        id="refPosition" 
                        placeholder="Manager" 
                        className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refContact" className="text-gray-700 dark:text-gray-300">Contact Number</Label>
                      <Input 
                        id="refContact" 
                        placeholder="+63 912 345 6789" 
                        className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent and Privacy */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Consent & Privacy</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required 
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-300">
                      I consent to the processing of my personal data for recruitment purposes and understand that 
                      ShoreAgents will handle my information in accordance with applicable data protection laws.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="futureOpportunities" 
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="futureOpportunities" className="text-sm text-gray-600 dark:text-gray-300">
                      I would like to be considered for future opportunities that match my skills and experience.
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button 
                  type="submit"
                  className={twMerge(
                    "w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full",
                    "transition-all duration-300 shadow-lg hover:shadow-xl",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Application
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Alternative Actions */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">Or</p>
            <motion.button 
              className={twMerge(
                "px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full",
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Job Alert
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Hiring Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              OUR HIRING PROCESS
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Here's a step-by-step guide on how our hiring process works.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Resume Review & Pre-Qualification</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The recruitment team will review your resume and conduct a pre-qualification call to determine your suitability for the position, availability, and other relevant details. At the end of the call, you will be instructed to provide an introduction video to be added to your profile.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Initial Interview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Once you pass the pre-qualification process, you will be invited for an initial interview via Zoom. The interview will focus on your experience, skills, suitability for the position, and how you respond to specific questions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Client Endorsement</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you pass the initial interview and your skills match what our client is looking for, you will be endorsed to our clients for further review.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Handshake className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Client Interview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You will then have the opportunity to be interviewed by the client. The client will focus on getting to know you, your experience, and your skills to determine your suitability for the role.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Offer Discussion</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Successful candidates will receive a call from our team to discuss the offer and will receive a copy via email after.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl shadow-sm border border-green-200 dark:border-green-700">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3">Welcome to ShoreAgents!</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  Your journey with ShoreAgents begins!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              GET IN TOUCH
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your career journey? Connect with us and explore opportunities together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Office Address */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Office Address</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Clark Freeport Zone</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Angeles City, Pampanga, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Email</p>
                      <a href="mailto:recruitment@shoreagents.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        recruitment@shoreagents.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Phone</p>
                      <a href="tel:+639123456789" className="text-blue-600 dark:text-blue-400 hover:underline">
                        +63 912 345 6789
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Office Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                    <span className="text-gray-900 dark:text-white font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                    <span className="text-gray-900 dark:text-white font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                    <span className="text-gray-900 dark:text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://www.facebook.com/shoreagentscareers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/shoreagentscareers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/unika-cornelio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Getting Here</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Free Shuttle Service</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Available from Clark Main Gate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Free Parking</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Secure parking available for all employees</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a Message</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactFirstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
                    <Input 
                      id="contactFirstName" 
                      placeholder="John" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactLastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
                    <Input 
                      id="contactLastName" 
                      placeholder="Doe" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-gray-700 dark:text-gray-300">Email</Label>
                  <Input 
                    id="contactEmail" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactSubject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                  <select 
                    id="contactSubject" 
                    className="w-full rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="career">Career Opportunities</option>
                    <option value="application">Application Status</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactMessage" className="text-gray-700 dark:text-gray-300">Message</Label>
                  <Textarea 
                    id="contactMessage" 
                    placeholder="Tell us how we can help you..." 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                  />
                </div>
                <motion.button 
                  type="submit"
                  className={twMerge(
                    "w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full",
                    "transition-all duration-300 shadow-lg hover:shadow-xl",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </motion.div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What shifts do you offer?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Depending on clients' business needs, we offer Day, Night, and Mid shifts.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 2 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do I need experience to be hired?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  It would depend on the role the client is hiring for. Some may require experience, and others may not.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 3 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do you offer a permanent WFH setup?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  No, all of our staff are required to work in the office. However, we organize monthly events and activities as one of the perks of our team for working in the office.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 4 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  How much is the salary range at ShoreAgents?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The salary offered would depend on your level of experience and the relevance of your knowledge to the role.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 5 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do you offer a shuttle service?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide shuttle service for our day shift employees from a designated pick-up location to our office and vice versa.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 6 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What is the most common time for the day shift and night shift?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Day shift: 6 AM - 3 PM<br />
                  Night shift: 8 PM - 5 AM | 9 PM - 6 AM | 11 PM - 8 AM<br />
                  Details above may vary depending on the client.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 7 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do I have to submit the introduction video?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, the introduction video is one of the essential requirements of the application process; hence, accomplishing it is necessary.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 8 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Where will the interview take place?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  There are 3 interviews in the recruitment process:<br />
                  1.) The verification interview is done via phone call.<br />
                  2.) The company interview is carried out through Zoom meetings.<br />
                  3.) The client interview happens on various online meeting platforms, depending on the client's preference.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 9 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What are the company benefits?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  HMO, unlimited coffee (for on-site employees), free shuttle service from and to Clark Main Gate, government-mandated contributions (SSS, PAGIBIG, PhilHealth), and company events.
                </p>
              </div>
            </motion.details>

            {/* FAQ Item 10 */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  What is the company's culture?
                </h4>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  ShoreAgents epitomizes BPO work-life balance, prioritizing employee diversity and fulfilling its promise as the NumberFun workplace with enjoyable events and surprises.
                </p>
              </div>
            </motion.details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
            <h4 className="text-xl font-bold">ShoreAgents</h4>
          </div>
          <p className="text-gray-400 mb-6">
            Connecting talent with opportunity, one career at a time.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
