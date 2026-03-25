import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Icon from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, stats } from '../data';

function Home({ setActiveSection }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90 } },
  };

  const cardVariants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    hover: {
      scale: 1.03,
      y: -6,
      boxShadow: '0 20px 40px -10px rgba(200, 160, 32, 0.18)',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-[#FAF8F3]">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(ellipse at 25% 55%, rgba(200,160,32,0.07) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(27,43,66,0.04) 0%, transparent 55%)',
                'radial-gradient(ellipse at 65% 70%, rgba(200,160,32,0.09) 0%, transparent 55%), radial-gradient(ellipse at 35% 35%, rgba(27,43,66,0.05) 0%, transparent 55%)',
                'radial-gradient(ellipse at 25% 55%, rgba(200,160,32,0.07) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(27,43,66,0.04) 0%, transparent 55%)',
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? 3 : 2,
                height: i % 3 === 0 ? 3 : 2,
                background: '#C8A020',
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 13.1) % 100}%`,
              }}
              animate={{ y: [0, -35, 0], opacity: [0.12, 0.45, 0.12] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border border-[#C8A020]/35 bg-[#C8A020]/8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8A020]" />
              <span className="text-[#9A7B10] text-xs font-bold tracking-[0.18em] uppercase">
                Premium Professional Services
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8A020]" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#1A2535] mb-6 leading-tight"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.55 }}
            >
              <motion.span
                className="bg-gradient-to-r from-[#C8A020] via-[#E8C84A] to-[#9A7B10] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                Anything You Need
              </motion.span>
              <br />
              <span className="text-[#1A2535]">We Can Sort</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-lg md:text-xl text-[#5C6B7A] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Here to serve your needs — professional security, logistics, and premium services
              tailored to exceed your expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button
                  onClick={() => scrollToSection('services')}
                  size="lg"
                  className="bg-gradient-to-r from-[#C8A020] to-[#A07818] hover:from-[#A07818] hover:to-[#8A6610] text-white px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-widest font-semibold border-0"
                >
                  Explore Services
                  <Icon.ChevronRight className="ml-2" size={17} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#C8A020] text-[#B8920C] hover:bg-[#C8A020] hover:text-white px-9 py-4 rounded-full transition-all duration-300 text-sm tracking-widest font-semibold bg-transparent"
                >
                  <Icon.Phone className="mr-2" size={17} />
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative icons */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 opacity-[0.08]"
        >
          <Icon.Shield size={110} style={{ color: '#C8A020' }} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-10 opacity-[0.06]"
        >
          <Icon.Users size={90} style={{ color: '#1B2B42' }} />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A020]/35 to-transparent" />
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="py-20 bg-[#1B2B42] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C8A020 1px, transparent 0)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-[#E8C84A] to-[#C8A020] bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#6A8EA8] text-xs font-semibold tracking-[0.16em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A020]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8920C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2535] mb-5">
              About{' '}
              <span className="bg-gradient-to-r from-[#C8A020] to-[#9A7B10] bg-clip-text text-transparent">
                K&S Services
              </span>
            </h2>
            <div className="w-14 h-px bg-gradient-to-r from-[#C8A020] to-[#E8C84A] mx-auto mb-6" />
            <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto leading-relaxed">
              We are a premier service provider specialising in security, logistics, and premium support services.
              Our commitment to excellence and attention to detail sets us apart in the industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                icon: Icon.Award,
                title: 'Excellence',
                description: 'Committed to delivering the highest quality services with attention to every detail.',
              },
              {
                icon: Icon.Clock,
                title: 'Reliability',
                description: '24/7 availability and consistent performance you can always depend on.',
              },
              {
                icon: Icon.CheckCircle,
                title: 'Trust',
                description: 'Building long-term relationships through transparency and professional integrity.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(200,160,32,0.14)' }}
                className="relative text-center p-9 rounded-2xl bg-white border border-[#E2C97E]/35 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8A020] to-[#E8C84A] opacity-55" />
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ background: 'linear-gradient(135deg, #C8A020, #A07818)' }}
                >
                  <value.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1A2535] mb-3 tracking-wide">{value.title}</h3>
                <p className="text-[#5C6B7A] leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #FAF8F3 50%, #EDE4CE 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A020]/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#C8A020 0,#C8A020 1px,transparent 0,transparent 64px),repeating-linear-gradient(90deg,#C8A020 0,#C8A020 1px,transparent 0,transparent 64px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B8920C] text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2535] mb-5">
              Our{' '}
              <span className="bg-gradient-to-r from-[#C8A020] to-[#9A7B10] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <div className="w-14 h-px bg-gradient-to-r from-[#C8A020] to-[#E8C84A] mx-auto mb-6" />
            <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your specific needs with professional excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const ServiceIcon = Icon[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2C97E]/30 cursor-pointer relative overflow-hidden group"
                >
                  {/* Top gold accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8A020] to-[#E8C84A] opacity-40 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Hover background wash */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#C8A020]/5 to-[#E8C84A]/4 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 7 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="inline-flex items-center justify-center w-13 h-13 rounded-xl mb-5"
                      style={{ background: 'linear-gradient(135deg, #C8A020, #A07818)', width: 52, height: 52 }}
                    >
                      {ServiceIcon && <ServiceIcon size={24} className="text-white" />}
                    </motion.div>

                    <h3 className="text-lg font-bold text-[#1A2535] mb-2 tracking-wide">{service.title}</h3>
                    <p className="text-[#5C6B7A] mb-5 leading-relaxed text-sm">{service.description}</p>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: selectedService === index ? 'auto' : 0,
                        opacity: selectedService === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature, fi) => (
                          <motion.li
                            key={fi}
                            className="flex items-center text-[#3D4E5E]"
                            initial={{ x: -16, opacity: 0 }}
                            animate={{
                              x: selectedService === index ? 0 : -16,
                              opacity: selectedService === index ? 1 : 0,
                            }}
                            transition={{ delay: fi * 0.07 }}
                          >
                            <Icon.CheckCircle size={13} style={{ color: '#C8A020' }} className="mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <div className="flex items-center gap-1 text-[#B8920C] text-xs font-semibold tracking-wider uppercase">
                      <span>{selectedService === index ? 'Show less' : 'View details'}</span>
                      <motion.div
                        animate={{ rotate: selectedService === index ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon.ChevronRight size={14} style={{ color: '#C8A020' }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#1B2B42] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #C8A020 1px, transparent 0)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A020]/45 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A020] text-xs font-bold tracking-[0.2em] uppercase mb-3">Reach Out</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Get In{' '}
              <span className="bg-gradient-to-r from-[#E8C84A] to-[#C8A020] bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-14 h-px bg-gradient-to-r from-[#C8A020] to-[#E8C84A] mx-auto mb-6" />
            <p className="text-lg text-[#6A8EA8] max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your requirements? Contact us today for a personalised consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              {[
                { icon: Icon.Phone, title: 'Phone', info: '+44 (0) 7376 977792' },
                { icon: Icon.Mail, title: 'Email', info: 'info@kandsservicesinternational.com' },
                { icon: Icon.MapPin, title: 'Address', info: 'London, United Kingdom' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C8A020, #A07818)' }}
                  >
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">{contact.title}</h3>
                    <p className="text-[#6A8EA8] text-sm">{contact.info}</p>
                  </div>
                </motion.div>
              ))}

              {/* Brand quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 p-6 rounded-2xl border border-[#C8A020]/22 bg-[#C8A020]/6"
              >
                <p className="text-[#E2C97E] text-base font-medium italic leading-relaxed">
                  "Here to serve your needs — with professionalism, discretion, and excellence."
                </p>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#FDFCF8] rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C8A020] to-[#E8C84A]" />

              <h3 className="text-2xl font-bold text-[#1A2535] mb-7 tracking-wide">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2C97E]/60 focus:border-[#C8A020] focus:ring-2 focus:ring-[#C8A020]/15 outline-none transition-all bg-[#FAFAF6] text-[#1A2535] placeholder-[#9AA8B2] text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2C97E]/60 focus:border-[#C8A020] focus:ring-2 focus:ring-[#C8A020]/15 outline-none transition-all bg-[#FAFAF6] text-[#1A2535] placeholder-[#9AA8B2] text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2C97E]/60 focus:border-[#C8A020] focus:ring-2 focus:ring-[#C8A020]/15 outline-none transition-all bg-[#FAFAF6] text-[#1A2535] placeholder-[#9AA8B2] text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2C97E]/60 focus:border-[#C8A020] focus:ring-2 focus:ring-[#C8A020]/15 outline-none transition-all bg-[#FAFAF6] text-[#1A2535] placeholder-[#9AA8B2] text-sm"
                />
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2C97E]/60 focus:border-[#C8A020] focus:ring-2 focus:ring-[#C8A020]/15 outline-none transition-all resize-none bg-[#FAFAF6] text-[#1A2535] placeholder-[#9AA8B2] text-sm"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold tracking-wider text-sm border-0 bg-gradient-to-r from-[#C8A020] to-[#A07818] hover:from-[#A07818] hover:to-[#8A6610]"
                  >
                    Send Message
                    <Icon.ChevronRight className="ml-2" size={17} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
