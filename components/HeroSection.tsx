'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HoverNavLink } from '@/components/ui/HoverNavLink';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import GoogleTranslate from './GoogleTranslate';

const brands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'] as const;

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(250);

  useEffect(() => {
    const handleResize = () => {
      setScrollDuration(window.innerWidth < 768 ? 100 : 250);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) setMenuOpen(false);
      setLastScrollY(currentScrollY);
    };
    if (menuOpen) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);
  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <div className="bg-[#0e0e0e] relative w-full text-white md:px-12 overflow-hidden [@media(min-width:2560px)]:px-40" id="hero">
      <GoogleTranslate isOpen={showTranslate} onClose={() => setShowTranslate(false)} />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsBackground className="z-0" />
        <ShootingStars className="z-20" />
      </div>

      <div className="relative z-30">
        {/* Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] md:h-[80vh] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] blur-4xl pointer-events-none z-0 [@media(min-width:2560px)]:h-[60vh]"
        />

        {/* Navbar */}
        <div className="flex items-center justify-between py-[clamp(1rem,2vw,2.5rem)] w-full">
          <img src="/icons/majarahlogo.svg" alt="Majarah Logo" className="h-auto w-[clamp(8rem,18vw,30rem)]" />

          <div className="hidden md:flex items-center justify-between w-full ml-4">
            <div className="mx-auto">
              <div className="flex flex-nowrap items-center justify-center gap-[clamp(1.5rem,4vw,5rem)] px-[clamp(1rem,3vw,2.5rem)] py-[clamp(0.4rem,0.4vw,0.75rem)] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}>
                <HoverNavLink label="About us" href="#aboutus" />
                <HoverNavLink label="Services" href="#services" />
                <HoverNavLink label="Contact Us" href="#contact" />
              </div>
            </div>
            <GoogleTranslate isOpen={showTranslate} onClose={() => setShowTranslate(false)} />
            <div className="ml-auto">
              <a  className="inline-flex items-center rounded-full border border-white/10 bg-[#1B2B40] text-white hover:bg-[#26364e] transition-all"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.125rem)', height: 'clamp(2.5rem, 4vh, 3.5rem)', paddingInline: 'clamp(1rem, 2.5vw, 2.5rem)' }}
                onClick={() => setShowTranslate(!showTranslate)}
                >
                 🌐 Translate
              </a>
            </div>
          </div>

          <div className="md:hidden top-20">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white ">
              {menuOpen ? <XMarkIcon className="w-10 h-10 mr-5" /> : <Bars3Icon className="w-10 h-10 mr-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (

          <div className="md:hidden flex flex-col items-center gap-4 mt-4 py-4 px-4 bg-[#1B2B40]/80 rounded-xl border border-white/10 backdrop-blur-sm">
            <HoverNavLink label="About us" href="#aboutus" />
              <HoverNavLink label="Services" href="#services" />
              <HoverNavLink label="Contact Us" href="#contact" />
            <a className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#1B2B40] border border-white/10 text-sm font-poppins text-white hover:bg-[#26364e] transition"onClick={() => setShowTranslate(!showTranslate)}> 🌐 Translate</a>
          </div>
        )}

        <div className="border-b border-white/20 w-full mb-5" />

        {/* Hero Title */}
        <div className="relative md:mt-40 max-w-3xl mx-auto text-center z-30 [@media(min-width:2560px)]:max-w-6xl">
          <motion.div
           initial={{
    opacity: 0,
    y: 100,
    scale: 0.85,
    filter: 'blur(12px)',
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99], // more springy and dramatic
  }}
  className="relative z-10"
          >
            <div className="relative inline-flex md:h-10 overflow-hidden rounded-full p-[1px] mb-6 [@media(min-width:2560px)]:mb-10">
              <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#77B8F3_0%,#FFFFFF_50%,#104677_100%)]" />
              <p className="inline-flex w-full items-center justify-center rounded-full bg-[#1B2B40] text-white/60 backdrop-blur-3xl z-10 relative"
                style={{
                  fontSize: 'clamp(0.60rem, 2vw, 1.35rem)',
                  paddingInline: 'clamp(1.1rem, 4vw, 3rem)',
                  paddingBlock: 'clamp(0.2rem, 1.2vw, 1rem)'
                }}>
                Creating Digital That Matters
              </p>
            </div>

            <motion.h1
              className="font-aeonik text-white text-[clamp(1.50rem,4vw,6rem)] leading-[clamp(2.2rem,5vw,7rem)] font-light text-center"
              initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="whitespace-nowrap">
                We Don’t <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">Just Create Content</span>
              </div>
              <div className="whitespace-nowrap">
                We Build <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text">Impact</span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-poppins font-light text-[clamp(0.5rem,1vw,1.50rem)] mt-[clamp(1rem,4vw,2.5rem)] leading-relaxed text-[#F5F5F5] px-5 text-center"
            >
              Founded by Eisa Al Habib, Emmy® award-winning filmmaker and Forbes 30 Under 30 honoree, Majarah is a full-scale media agency delivering next-level storytelling, influencer-driven campaigns, and cross-platform digital marketing that moves people—and brands.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-10 border border-[#5AA5E9] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 mb-10 md:mb-0"
              style={{
                fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)',
                paddingInline: 'clamp(1.2rem, 4vw, 2.5rem)',
                paddingBlock: 'clamp(0.3rem, 0.5vw, 1rem)',
                background: 'linear-gradient(to bottom, #5AA5E9 -150%, transparent 60%)',
              }}
            >
              Let’s Work Together →
            </motion.a>
          </motion.div>
        </div>

        {/* Brand Logos */}
        <div className="mt-20 text-center overflow-hidden [@media(min-width:2560px)]:mt-32">
          <p className="font-poppins font-regular text-lg text-gray-400 mb-6 [@media(min-width:2560px)]:text-2xl">
            Top-tier brands and governments redefining how stories are told online.
          </p>

          {[0, 1].map(row => (
    <motion.div
      key={row}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden w-full h-[clamp(3rem,6vw,8rem)] mb-10"
    >
      <motion.div
        className="absolute left-0 top-0 flex whitespace-nowrap"
        animate={{ x: row % 2 === 0 ? ['0%', '-100%'] : ['-100%', '0%'] }}
        transition={{ duration: scrollDuration, ease: 'linear', repeat: Infinity }}
      >
        {/* Duplicate logos twice to ensure perfect loop */}
        {[...brands, ...brands, ...brands].map((b, i) => (
          <div
            key={`${row}-${i}`}
            className="inline-block w-24 sm:w-36 md:w-48 [@media(min-width:2560px)]:w-80 shrink-0"
          >
            <img
              src={`/brands/${b}.svg`}
              alt={`Brand ${b}`}
              className="object-contain opacity-100 transition hover:opacity-100 filter"
              style={{ height: 'clamp(2.5rem, 6vw, 8rem)' }}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  ))}
            </div>
          </div>
        </div>
  );
}