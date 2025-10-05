'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ScrollControlledVideo from './ui/ScrollControlledVideo';

export default function FaceBehindMajarah() {
  return (
    <div className="relative bg-[#0e0e0e] overflow-hidden">
      {/* ✅ Gradient Overlay */}
      <div className="absolute top-[clamp(500px,60vh,1150px)] md:top-[600px] left-0 w-full h-[clamp(700px,80vh,1000px)] bg-[linear-gradient(to_left,_#4899E3_-50%,_transparent_40%)] z-0 pointer-events-none blur-[100px]" />

      {/* ✅ Heading */}
      <div className="text-center mb-[clamp(2rem,5vw,4rem)] mt-[clamp(2rem,5vw,6rem)]" id="aboutus">
        <h2 className="text-[clamp(2.5rem,4vw,6rem)] font-aeonik font-light">
          Face Behind{' '}
          <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
            Majarah
          </span>
        </h2>
      </div>

      {/* ✅ Main Section Grid */}
      <div className="flex flex-col md:flex-row justify-between items-start px-[clamp(2rem,6vw,15rem)] py-[clamp(3rem,6vw,8rem)] gap-[clamp(2rem,4vw,4rem)] text-white overflow-hidden relative z-10">
        {/* LEFT TEXT SIDE */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[clamp(2rem,4vw,5rem)] font-aeonik font-regular mb-[clamp(0.5rem,1vw,1.5rem)]">
            <span className="bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x">
              Eisa Al Habib
            </span>
          </h2>

          <p className="text-[clamp(1rem,1.2vw,5rem)] leading-[clamp(1.6rem,2.8vw,4rem)] font-light font-poppins text-gray-300 mb-[clamp(2rem,3vw,3rem)] max-w-[clamp(90%,40vw,700px)]">
            International Emmys Young Creatives Award winner and Forbes-recognized creator, leads Majarah with a bold,
            viral-first vision. His content bridges culture, creativity, and influence across platforms.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-start gap-[clamp(1rem,2vw,3rem)] mb-[clamp(2rem,2vw,3rem)]">
            {[
              { icon: <FaYoutube />, link: 'https://www.youtube.com/@eisayo' },
              { icon: <FaTiktok />, link: 'https://www.tiktok.com/@eisayo?lang=en' },
              { icon: <FaInstagram />, link: 'https://www.instagram.com/eisayo/' },
              { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/eisa-alhabib/' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[clamp(2.5rem,3vw,5rem)] h-[clamp(2.5rem,3vw,5rem)] text-[clamp(1rem,2vw,3rem)] rounded-full bg-[#343236] flex items-center justify-center text-gray-400 hover:scale-110 hover:shadow-lg hover:bg-[#4a484b] hover:text-white border border-[#595959]"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 gap-[clamp(1rem,3vw,3rem)] items-center">
            <img src="/icons/forbeslogo.svg" alt="Forbes" className="w-[clamp(50px,6vw,200px)] h-auto ml-5" />
            <img src="/icons/logo2.svg" alt="Arab Forum" className="w-[clamp(120px,14vw,340px)] h-auto" />
            <img src="/icons/logo3.svg" alt="Logo 3" className="w-[clamp(100px,11vw,300px)] h-auto" />
            <img src="/icons/logo4.svg" alt="Logo 4" className="w-[clamp(100px,11vw,320px)] h-auto" />
          </div>
        </div>

        {/* RIGHT SCROLLING IMAGE GRID */}
        <div
          className="md:w-1/2 w-full grid grid-cols-2 gap-[clamp(1rem,2vw,1.5rem)] relative h-[clamp(500px,55vh,1000px)] md:h-[clamp(550px,50vh,950px)] xl:h-[clamp(600px,80vh,1300px)]
         overflow-hidden"
        >
          {/* COLUMN 1: SCROLL UP */}
          <motion.div
            className="flex flex-col gap-[clamp(1rem,2vw,2rem)]"
            animate={{ y: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[1, 2].map((_, i) => (
              <React.Fragment key={i}>
                <div className="bg-gradient-to-br from-[#003C2A] to-[#418571] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
                  <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">
                    1B+
                    <br />
                    Views
                  </p>
                  <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-100">Across Globe</p>
                </div>

                <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,700px)]">
                  <img
                    src="/icons/col1.svg"
                    alt="Gold Play Button"
                    className="rounded-xl object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-50" />
                </div>

                <div className="bg-gradient-to-tr from-[#3C1515] to-[#D40F0F] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
                  <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">1600+</p>
                  <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">Videos</p>
                  <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-300">Produced</p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* COLUMN 2: SCROLL DOWN */}
          <motion.div
            className="flex flex-col gap-[clamp(1rem,2vw,2rem)]"
            animate={{ y: ['-50%', '0%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[1, 2].map((_, i) => (
              <React.Fragment key={i}>
                <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,700px)]">
                  <img src="/icons/YT 1.png" alt="Eisa in suit" className="rounded-xl object-cover w-full h-full" />
                  <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
                </div>

                <div className="bg-gradient-to-tl from-[#1B091E] to-[#792884] rounded-xl p-[clamp(1rem,2vw,2rem)] flex flex-col justify-center items-start">
                  <p className="text-[clamp(1.5rem,3vw,3rem)] font-inter font-bold text-white">5M+</p>
                  <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] text-gray-300 font-inter font-bold">Followers</p>
                </div>

                <div className="relative overflow-hidden w-full h-[clamp(250px,30vw,600px)]">
                  <img
                    src="/icons/card6.svg"
                    alt="Gold Play Button"
                    className="rounded-xl object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#4899E3] to-transparent rounded-xl opacity-60" />
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ Video Section */}
      <div className="[@media(min-width:2560px)]:mb-40">
        <ScrollControlledVideo />
      </div>
    </div>
  );
}
