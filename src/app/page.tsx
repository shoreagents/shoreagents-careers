"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StickyScrollReveal } from "@/components/ui/sticky-scroll-reveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Award, Handshake, TrendingUp, FileText, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Home() {
  // State for job filtering
  const [activeFilter, setActiveFilter] = useState("Featured");
  // State for form expansion
  const [showFullForm, setShowFullForm] = useState(false);


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
      <header className="sticky top-0 border-b bg-gray-800/80 backdrop-blur-sm relative z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/SAC-LOGO-other.png" 
                alt="ShoreAgents Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8 xl:gap-x-12">
              <button 
                onClick={() => document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Technology & Workspace
              </button>
              <button 
                onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </nav>
            <Button 
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 bg-blue-600 hover:bg-blue-700"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Comprehensive Hero Page */}
      <section className="relative py-24 px-6 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/images/IMG_8025_OPTIMIZED.jpg" 
            alt="ShoreAgents Office Background" 
            fill
            className="object-cover opacity-30"
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
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
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
      <section id="why-choose" className="py-20 px-6 bg-gray-900">
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
            <p className="text-lg text-white max-w-3xl mx-auto">
              Discover the unique advantages of working with us through our interactive scroll experience
            </p>
          </motion.div>
          
          <StickyScrollReveal
            content={[
              {
                title: "World-Class Technology",
                description: "Experience cutting-edge technology and modern equipment that empowers your productivity. Our state-of-the-art infrastructure ensures you have everything you need to excel in your role.",
                content: (
                  <div className="h-full w-full relative overflow-hidden">
                    <Image 
                      src="/images/IMG_6581.JPG" 
                      alt="ShoreAgents Office - Modern Technology" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl mb-2">💻</div>
                      <h4 className="text-lg font-bold">Modern Workstations</h4>
                      <p className="text-sm opacity-90">Latest computers & dual monitors</p>
                  </div>
                </div>
                ),
              },
              {
                title: "Professional Growth",
                description: "Join a company that invests in your development. We provide comprehensive training programs, mentorship opportunities, and clear career advancement paths.",
                content: (
                  <div className="h-full w-full relative overflow-hidden">
                    <Image 
                      src="/images/IMG_6593.JPG" 
                      alt="ShoreAgents Office - Professional Development" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl mb-2">📈</div>
                      <h4 className="text-lg font-bold">Career Development</h4>
                      <p className="text-sm opacity-90">Training & advancement opportunities</p>
                    </div>
                    </div>
                ),
              },
              {
                title: "Amazing Work Environment",
                description: "Work in a modern, comfortable office space designed for productivity and collaboration. Enjoy premium amenities and a supportive team culture.",
                content: (
                  <div className="h-full w-full relative overflow-hidden">
                    <Image 
                      src="/images/IMG_8300.JPG" 
                      alt="ShoreAgents Office - Work Environment" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl mb-2">🏢</div>
                      <h4 className="text-lg font-bold">Modern Office</h4>
                      <p className="text-sm opacity-90">Clark Freeport Zone</p>
                  </div>
                </div>
                ),
              },
              {
                title: "Competitive Benefits",
                description: "Enjoy comprehensive benefits including health insurance, performance bonuses, team events, and government-mandated benefits. We take care of our team members.",
                content: (
                  <div className="h-full w-full relative overflow-hidden">
                    <Image 
                      src="/images/IMG_8210.JPG" 
                      alt="ShoreAgents Office - Benefits & Amenities" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl mb-2">🎁</div>
                      <h4 className="text-lg font-bold">Great Benefits</h4>
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
      <section id="reviews" className="py-16 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Our Employees Say
            </h3>
            <p className="text-lg text-white">
              Hear from our team members on what makes ShoreAgents Careers a great place to work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: "Elizabeth",
                role: "Employee",
                quote: "ShoreAgents is exceptional in promoting work-life balance. They truly understand the importance of a healthy work environment, allowing employees to excel in their roles while maintaining personal well-being.",
                rating: 5,
                profileImage: "/images/ELIZABETH-PIC.jpg"
              },
              {
                name: "Romeo",
                role: "Employee", 
                quote: "I work the night shift at ShoreAgents, and it's been a great experience. The team is supportive, the office is comfortable, and the work environment is professional. I also appreciate the training and how organized everything is. If you're looking for a stable night shift job with room to grow, I recommend ShoreAgents!",
                rating: 5,
                profileImage: "/images/ROMEO-PIC.jpg"
              },
              {
                name: "Kath",
                role: "Employee",
                quote: "Working at ShoreAgents is a lot of fun! The company not only provides a work-life balance, but also helps fresh graduates in starting their careers.",
                rating: 5,
                profileImage: "/images/KATH-PIC.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                className={twMerge(
                  "bg-transparent border-2 border-white rounded-2xl p-4 text-center h-full flex flex-col",
                  "transition-all duration-300 ease-in-out",
                  "hover:shadow-2xl hover:scale-105 hover:bg-white/10"
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                {/* Profile Image */}
                <motion.div 
                  className="mx-auto mb-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Avatar className="w-16 h-16 border-2 border-white">
                    <AvatarImage 
                      src={testimonial.profileImage} 
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-gray-600 text-white text-lg font-semibold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <motion.div 
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-400 text-sm"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-white mb-3 italic text-center text-sm leading-relaxed flex-grow"
                  whileHover={{ 
                    color: "#E5E7EB",
                    transition: { duration: 0.3 }
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </motion.p>
                <motion.div 
                  className="border-t border-white pt-3 text-center"
                  whileHover={{ 
                    borderColor: "#F3F4F6",
                    transition: { duration: 0.3 }
                  }}
                >
                  <h5 className="font-semibold text-white text-sm">{testimonial.name}</h5>
                </motion.div>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Recognitions & Certifications
            </h3>
            <p className="text-lg text-gray-300">
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
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
          </div>
                <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Workspace Section */}
      <section id="technology" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology & Workspace
            </h3>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Discover our amazing office amenities designed for productivity and comfort with state-of-the-art technology and equipment to support your success
            </p>
          </motion.div>
              
              <StickyScrollReveal
                content={[
                  {
                    title: "Free Coffee",
                    description: "Enjoy premium coffee and beverages available 24/7 to fuel your productivity throughout the day. Our coffee station features high-quality beans and modern brewing equipment.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <Image 
                  src="/images/IMG_6250.JPG" 
                          alt="ShoreAgents Office - Free Coffee Station" 
                          fill
                          className="object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">☕</div>
                          <h4 className="text-lg font-bold">Premium Coffee</h4>
                          <p className="text-sm opacity-90">Available 24/7</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "High-Speed Internet",
                    description: "Experience lightning-fast enterprise-grade fiber connection that ensures seamless communication and productivity. Our robust internet infrastructure supports all your work needs without interruption.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <Image 
                  src="/images/IMG_6593.JPG" 
                          alt="ShoreAgents Office - High-Speed Internet Infrastructure" 
                          fill
                          className="object-cover"
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
                    title: "Free Parking",
                    description: "Convenient and secure parking for all employees. No need to worry about parking fees or finding a spot - we provide dedicated parking spaces to make your commute stress-free.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <Image 
                  src="/images/IMG_8532.JPG" 
                          alt="ShoreAgents Office - Free Parking" 
                          fill
                          className="object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🚗</div>
                          <h4 className="text-lg font-bold">Secure Parking</h4>
                          <p className="text-sm opacity-90">Free for all employees</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Fun Events",
                    description: "Join our monthly team building and celebration events designed to foster camaraderie and boost team spirit. From game nights to company outings, we believe in work-life balance.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <Image 
                  src="/images/IMG_8453.JPG" 
                          alt="ShoreAgents Office - Fun Events" 
                          fill
                          className="object-cover"
                />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl mb-2">🎉</div>
                          <h4 className="text-lg font-bold">Team Events</h4>
                          <p className="text-sm opacity-90">Monthly celebrations</p>
              </div>
              </div>
                    ),
                  },
                  {
                    title: "Modern Workstations",
                    description: "Work with the latest computers and dual monitors in ergonomic setups designed for maximum productivity. Our workstations are equipped with powerful hardware to handle any task efficiently.",
                    content: (
                      <div className="h-full w-full relative overflow-hidden">
                        <Image 
                          src="/images/IMG_6581.JPG" 
                          alt="ShoreAgents Office - Modern Workstations" 
                          fill
                          className="object-cover"
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
                        <Image 
                          src="/images/IMG_6593.JPG" 
                          alt="ShoreAgents Office - Modern Workspace" 
                          fill
                          className="object-cover"
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
                        <Image 
                          src="/images/IMG_6783.JPG" 
                          alt="ShoreAgents Office - Communication Systems" 
                          fill
                          className="object-cover"
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
                <Image 
                  src="/images/IMG_8210.JPG" 
                          alt="ShoreAgents Office - Game Room" 
                  fill
                  className="object-cover"
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
                        <Image 
                          src="/images/IMG_8300.JPG" 
                          alt="ShoreAgents Office - Security Systems" 
                          fill
                          className="object-cover"
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
                <Image 
                  src="/images/IMG_8370.JPG" 
                          alt="ShoreAgents Office - Premium Coffee Station" 
                  fill
                  className="object-cover"
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
                <Image 
                  src="/images/IMG_8453.JPG" 
                          alt="ShoreAgents Office - Backup Power Systems" 
                  fill
                  className="object-cover"
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
                        <Image 
                          src="/images/IMG_8532.JPG" 
                          alt="ShoreAgents Office - Meeting Rooms" 
                          fill
                          className="object-cover"
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
                        <Image 
                          src="/images/IMG_8552.JPG" 
                          alt="ShoreAgents Office - Climate Control" 
                          fill
                          className="object-cover"
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
                        <Image 
                  src="/images/IMG_6250.JPG" 
                          alt="ShoreAgents Office - Dining Area" 
                          fill
                          className="object-cover"
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


      {/* Current Openings Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              BPO JOB POSTINGS
            </h3>
            <p className="text-lg text-white max-w-3xl mx-auto mb-12">
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
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 h-fit">
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
                <details className="group" id={`job-details-${job.id}`}>
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
      <section id="application" className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Candidate Careers Form
          </h3>
            <p className="text-base text-white mb-6 max-w-4xl mx-auto">
              <strong>Work with us!</strong> Unlimited earning potential while you upskill your career working for the fastest growing Real Estate BPO company located in the Clark Freeport Zone.
            </p>
          </motion.div>

          {/* Semi-Collapsible Application Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              {/* Essential Fields - Always Visible */}
              <div className="space-y-4">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name *
                    </Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your full name" 
                      className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone *
                    </Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your mobile number" 
                      className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="shiftPreference" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Preferred Shift *
                    </Label>
                    <select 
                      id="shiftPreference" 
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      required
                    >
                      <option value="">Select shift</option>
                      <option value="dayshift">Dayshift</option>
                      <option value="nightshift">Nightshift</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-1">
                  <Label htmlFor="resume" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Resume *
                  </Label>
                  <Input 
                    id="resume" 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                    required 
                  />
                </div>
              </div>

              {/* Collapsible Additional Fields */}
              <div className={`transition-all duration-500 overflow-hidden ${showFullForm ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Why do you want a job with us? */}
                  <div className="space-y-1">
                    <Label htmlFor="whyJob" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Why do you want a job with us? *
                    </Label>
                    <Textarea 
                      id="whyJob" 
                      placeholder="In one sentence tell us why you want a job with us" 
                      className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 min-h-[60px] py-2 text-sm"
                      required 
                    />
                  </div>

                  {/* Additional Personal Info */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="nickname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nickname
                      </Label>
                      <Input 
                        id="nickname" 
                        placeholder="Name you want to be called" 
                        className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="roleSuitability" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Most Suited Role *
                      </Label>
                      <select 
                        id="roleSuitability" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        required
                      >
                        <option value="">Select role</option>
                        <option value="customer-service">Customer Service</option>
                        <option value="sales">Sales Development</option>
                        <option value="virtual-assistant">Virtual Assistant</option>
                        <option value="real-estate">Real Estate Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Salary Information */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="salaryExpectation" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Salary Expectation
                      </Label>
                      <Input 
                        id="salaryExpectation" 
                        placeholder="Monthly salary expectation" 
                        className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="currentSalary" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Current Salary
                      </Label>
                      <Input 
                        id="currentSalary" 
                        placeholder="Current monthly salary" 
                        className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                      />
                    </div>
                  </div>

                  {/* Skills Rating */}
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="typingSpeed" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Typing Speed *
                      </Label>
                      <select 
                        id="typingSpeed" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        required
                      >
                        <option value="">Select speed</option>
                        <option value="20-30">20-30 WPM</option>
                        <option value="30-40">30-40 WPM</option>
                        <option value="40-50">40-50 WPM</option>
                        <option value="50+">50+ WPM</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="englishSpeaking" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        English Speaking *
                      </Label>
                      <select 
                        id="englishSpeaking" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        required
                      >
                        <option value="">Rate 1-5</option>
                        <option value="1">1 - Beginner</option>
                        <option value="2">2 - Basic</option>
                        <option value="3">3 - Intermediate</option>
                        <option value="4">4 - Advanced</option>
                        <option value="5">5 - Fluent</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="englishWriting" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        English Writing *
                      </Label>
                      <select 
                        id="englishWriting" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        required
                      >
                        <option value="">Rate 1-5</option>
                        <option value="1">1 - Beginner</option>
                        <option value="2">2 - Basic</option>
                        <option value="3">3 - Intermediate</option>
                        <option value="4">4 - Advanced</option>
                        <option value="5">5 - Fluent</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Fields */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="bpoExperience" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        BPO Experience
                      </Label>
                      <select 
                        id="bpoExperience" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      >
                        <option value="">Select experience</option>
                        <option value="yes-real-estate">Yes, Real Estate</option>
                        <option value="yes-other">Yes, Other BPO</option>
                        <option value="no">No Experience</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="howFoundUs" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        How did you find us? *
                      </Label>
                      <select 
                        id="howFoundUs" 
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        required
                      >
                        <option value="">Select source</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="jobstreet">JobStreet</option>
                        <option value="indeed">Indeed</option>
                        <option value="referral">Referral</option>
                        <option value="walk-in">Walk-in</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="space-y-1">
                    <Label htmlFor="profilePicture" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Profile Picture
                    </Label>
                    <Input 
                      id="profilePicture" 
                      type="file" 
                      accept="image/*" 
                      className="rounded-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Show More/Less Button */}
              <div className="text-center pt-2">
                <motion.button 
                  type="button"
                  onClick={() => setShowFullForm(!showFullForm)}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {showFullForm ? 'Show Less' : 'Show More Fields'}
                </motion.button>
              </div>

              {/* Submit Button - Only show when form is expanded */}
              {showFullForm && (
                <div className="text-center pt-4">
                  <motion.button 
                    type="submit"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                  </motion.button>
                </div>
              )}

            </form>
          </motion.div>
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              GET IN TOUCH
            </h3>
            <p className="text-lg text-white max-w-3xl mx-auto">
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
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Pampanga, Philippines</p>
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
                    <Label htmlFor="contactName" className="text-gray-700 dark:text-gray-300">Full Name *</Label>
                    <Input 
                      id="contactName" 
                      placeholder="Your full name" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="text-gray-700 dark:text-gray-300">Email Address *</Label>
                    <Input 
                      id="contactEmail" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactSubject" className="text-gray-700 dark:text-gray-300">Subject *</Label>
                  <Input 
                    id="contactSubject" 
                    placeholder="What's this about?" 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactMessage" className="text-gray-700 dark:text-gray-300">Message *</Label>
                  <Textarea 
                    id="contactMessage" 
                    placeholder="Tell us how we can help you..." 
                    className="rounded-xl border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                    required 
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 - First 5 FAQs */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  What shifts do you offer?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Depending on clients' business needs, we offer Day, Night, and Mid shifts.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  Do I need experience to be hired?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  It would depend on the role the client is hiring for. Some may require experience, and others may not.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  Do you offer a permanent WFH setup?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  No, all of our staff are required to work in the office. However, we organize monthly events and activities as one of the perks of our team for working in the office.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  How much is the salary range at ShoreAgents?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  The salary offered would depend on your level of experience and the relevance of your knowledge to the role.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  Do you offer a shuttle service?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide shuttle service for our day shift employees from a designated pick-up location to our office and vice versa.
                </p>
              </div>
            </motion.details>

            {/* Row 2 - Last 5 FAQs */}
            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  What is the most common time for the day shift and night shift?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Day shift: 6 AM - 3 PM<br />
                  Night shift: 8 PM - 5 AM | 9 PM - 6 AM | 11 PM - 8 AM<br />
                  Details above may vary depending on the client.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  Do I have to submit the introduction video?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yes, the introduction video is one of the essential requirements of the application process; hence, accomplishing it is necessary.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  Where will the interview take place?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  There are 3 interviews in the recruitment process:<br />
                  1.) The verification interview is done via phone call.<br />
                  2.) The company interview is carried out through Zoom meetings.<br />
                  3.) The client interview happens on various online meeting platforms, depending on the client's preference.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  What are the company benefits?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  HMO, unlimited coffee (for on-site employees), free shuttle service from and to Clark Main Gate, government-mandated contributions (SSS, PAGIBIG, PhilHealth), and company events.
                </p>
              </div>
            </motion.details>

            <motion.details 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <summary className="p-6 cursor-pointer list-none">
                <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                  What is the company's culture?
                </h4>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/images/Artwork 33.png" 
              alt="ShoreAgents Logo" 
              width={90}
              height={90}
              className="h-11 w-auto"
              quality={100}
              priority
            />
          </div>
          <p className="text-gray-400 mb-6">
            Building Brighter Futures
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
