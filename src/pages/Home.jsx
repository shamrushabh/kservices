import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Icon from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, stats } from '../data';

function Home({ setActiveSection }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setActiveSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const serviceCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-amber-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-amber-900/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(15, 23, 42, 0.2), rgba(146, 64, 14, 0.2))",
                "linear-gradient(135deg, rgba(15, 23, 42, 0.3), rgba(217, 119, 6, 0.3))",
                "linear-gradient(225deg, rgba(15, 23, 42, 0.2), rgba(146, 64, 14, 0.2))"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Anything You Need
              </motion.span>
              <br />
              <motion.span 
                className="text-slate-800"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                    "0 0 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                We Can Sort
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
            >
              HERE TO SERVE YOUR NEEDS... Professional security, logistics, and premium services 
              tailored to exceed your expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  Explore Services
                  <Icon.ChevronRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full transition-all duration-300 text-lg"
                >
                  <Icon.Phone className="mr-2" size={20} />
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 opacity-20"
        >
          <Icon.Shield size={80} className="text-amber-600" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-10 opacity-20"
        >
          <Icon.Users size={60} className="text-amber-600" />
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center text-white"
                whileHover={{
                  scale: 1.1,
                  y: -5
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: index * 0.1,
                    duration: 0.8
                  }}
                  className="text-4xl md:text-5xl font-bold mb-2 relative"
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {stat.number}
                  </motion.span>
                </motion.div>
                <div className="text-amber-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Animation */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-amber-600 to-amber-700" 
               style={{
                 clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)"
               }} 
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              About <span className="text-amber-600">K&S Services</span>
            </motion.h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are a premier service provider specializing in security, logistics, and premium support services. 
              Our commitment to excellence and attention to detail sets us apart in the industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Icon.Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality services with attention to every detail."
              },
              {
                icon: Icon.Clock,
                title: "Reliability",
                description: "24/7 availability and consistent performance you can depend on."
              },
              {
                icon: Icon.CheckCircle,
                title: "Trust",
                description: "Building long-term relationships through transparency and professional integrity."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mb-6"
                >
                  <value.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your specific needs with professional excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const ServiceIcon = Icon[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={serviceCardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer relative overflow-hidden"
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  {/* Animated Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mb-6"
                    >
                      {ServiceIcon && <ServiceIcon size={32} className="text-white" />}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: selectedService === index ? 'auto' : 0,
                        opacity: selectedService === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-slate-700"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ 
                              x: selectedService === index ? 0 : -20,
                              opacity: selectedService === index ? 1 : 0
                            }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <Icon.CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div
                      className="text-amber-600 text-sm font-medium"
                      animate={{
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {selectedService === index ? 'Click to collapse' : 'Click to expand'}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 50L0 0h100L50 50z\" fill=\"%23ffffff\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')",
            backgroundSize: "100px 100px"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-amber-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to discuss your requirements? Contact us today for a personalized consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: Icon.Phone, title: "Phone", info: "+44 (0) 7376 977792" },
                { icon: Icon.Mail, title: "Email", info: "info@kandsservicesinternational.com" },
                { icon: Icon.MapPin, title: "Address", info: "London, United Kingdom" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full"
                  >
                    <contact.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                    <p className="text-slate-300">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.2))",
                    "linear-gradient(90deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2))",
                    "linear-gradient(180deg, rgba(217, 119, 6, 0.2), rgba(245, 158, 11, 0.2))",
                    "linear-gradient(270deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2))",
                    "linear-gradient(360deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.2))"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setIsHovering(true)}
                      onBlur={() => setIsHovering(false)}
                    />
                    <motion.input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setIsHovering(true)}
                      onBlur={() => setIsHovering(false)}
                    />
                  </div>
                  <motion.input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                  <motion.input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                    whileFocus={{ scale: 1.02 }}
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                  <motion.textarea
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all resize-none"
                    whileFocus={{ scale: 1.02 }}
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      Send Message
                      <Icon.ChevronRight className="ml-2" size={20} />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

