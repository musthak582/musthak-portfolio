import React from 'react'
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '../components/Button.jsx';


const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  const imageAnim = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    }
  };
  return (
    <motion.section
      className="min-h-screen w-full flex flex-col justify-center items-center relative"
      id="home"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <motion.p
          className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans"
          variants={item}
        >
          Hi, I am Musthak
          <motion.span
            className="waving-hand"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut"
            }}
          >👋</motion.span>
        </motion.p>

        <motion.p
          className="hero_tag text-gray_gradient"
          variants={item}
          initial={{ backgroundPosition: '100% 50%' }}
          animate={{ backgroundPosition: '0% 50%' }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Building Products & Brands
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-[500px] px-4 sm:px-0 flex items-center justify-center mb-20"
        variants={imageAnim}
      >
        <div className="relative w-full flex items-center justify-center">
          <motion.img
            src="assets/hero-mk.png"
            alt="Hero"
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <DotLottieReact
            src="assets/code.lottie"
            loop
            autoplay
            className="hidden sm:block sm:w-[200px] sm:absolute sm:right-[20px] sm:top-[100px]"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-7 left-0 right-0 w-full z-10 c-space"
        variants={item}
      >
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
