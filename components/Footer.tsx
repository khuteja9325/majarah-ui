'use client';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  const fadeInUp = (delay = 0): any => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  });

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp(0)}
      className="relative z-10 text-white py-[clamp(2rem,8vw,10rem)] px-[clamp(1rem,4vw,9rem)] items-center bg-[linear-gradient(to_top_right,_#4899E3_-200%,_transparent_50%)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[clamp(1.5rem,8vw,14rem)]">
        {/* Logo and Tagline */}
        <motion.div variants={fadeInUp(0.2)} initial="hidden" whileInView="show">
          <div className="flex flex-col items-center text-center space-y-[clamp(0.7rem,2vw,1rem)]">
            <img
              src="/icons/majarahlogo.svg"
              alt="Majarah Logo"
              className="w-[clamp(10rem,12vw,18rem)] h-auto"
            />
            <p className="text-[clamp(0.875rem,1.2vw,1.25rem)] text-gray-400 leading-tight">
              Transform the Digital<br />
              <span className="inline-block">Experience</span>
            </p>
            <a
              href="#contact"
              className="px-[clamp(0.875rem,1.5vw,1.5rem)] py-[clamp(0.3rem,0.5vw,0.8rem)] rounded-full bg-white/10 border border-white/20 text-[clamp(0.75rem,1vw,1.125rem)] hover:bg-white/20 transition inline-block"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="space-y-[clamp(0.75rem,2.5vw,2rem)]"
        >
          <h4 className="font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]">
            Quick Links
          </h4>
          <ul className="font-poppins font-medium space-y-[clamp(0.5rem,1vw,1.25rem)] text-[clamp(0.75rem,1.1vw,1.125rem)] text-gray-400">
            {[
              { label: 'About Us', href: '#aboutus' },
              { label: 'Services', href: '#services' },
              { label: 'Our Work', href: '#services' },
              { label: 'Privacy Policy', href: '#aboutus' }, // redirecting to AboutUs
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative inline-block transition-colors duration-300 hover:text-white
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                    after:w-full after:scale-x-0 after:bg-white after:origin-left
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp(0.6)}
          initial="hidden"
          whileInView="show"
          className="space-y-[clamp(0.5rem,1.2vw,1.5rem)]"
        >
          <h4 className="font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]">
            Contact
          </h4>
          <ul className="font-poppins font-medium text-[clamp(0.75rem,1.1vw,1.125rem)] text-gray-400 space-y-[clamp(0.5rem,1vw,1.25rem)]">
            <li className="hover:text-white transition-colors duration-300">info@majarah.co</li>
            <li className="hover:text-white transition-colors duration-300">
              <a href="#hero">www.majarah.co</a>
            </li>
            <li className="hover:text-white transition-colors duration-300">
            Office 307-0151, Dubai Investments Park 1, Dubai,<br />United Arab Emirates
            </li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="show"
          className="space-y-[clamp(0.5rem,1.2vw,1.5rem)]"
        >
          <h4 className="font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]">
            Follow Us
          </h4>
          <div className="flex space-x-[clamp(0.75rem,1.5vw,2rem)] text-gray-400 text-[clamp(1.25rem,2vw,2.5rem)]">
            <a href="https://www.youtube.com/@eisayo"><FaYoutube className="hover:text-white transition-colors duration-300" /></a>
            <a href="https://www.instagram.com/eisayo/"><FaInstagram className="hover:text-white transition-colors duration-300" /></a>
            <a href="https://www.facebook.com/Eisayo/"><FaFacebookF className="hover:text-white transition-colors duration-300" /></a>
            <a href="https://www.tiktok.com/@eisayo?lang=en"><FaTiktok className="hover:text-white transition-colors duration-300" /></a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.p
        variants={fadeInUp(1.0)}
        initial="hidden"
        whileInView="show"
        className="font-poppins font-medium text-[clamp(0.75rem,1vw,1rem)] text-gray-600 pt-[clamp(1rem,2vw,2.5rem)] text-center mt-[clamp(1.5rem,3vw,3rem)]"
      >
        ©2024{' '}
        <a
          href="#aboutus"
          className="text-gray-600 hover:text-blue-400 transition-colors duration-300 underline-offset-4"
        >
          Majarah
        </a>{' '}
        Company, Inc. All rights reserved
      </motion.p>
    </motion.footer>
  );
};