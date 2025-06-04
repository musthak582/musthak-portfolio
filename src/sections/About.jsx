import { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Button from '../components/Button.jsx';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const bubbleVariants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <motion.section
      className="c-space my-20"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <motion.div className="col-span-1 xl:row-span-3" variants={itemVariants}>
          <div className="grid-container">
            <motion.img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.div variants={itemVariants}>
              <p className="grid-headtext">Hi, I'm Mohammed Musthak</p>
              <p className="grid-subtext">
                Through hands-on projects and self-driven learning, I've mastered the MERN stack
                to build full-stack applications with clean architecture and optimal performance.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-3" variants={itemVariants}>
          <div className="grid-container">
            {/* Tech Stack Grid */}
            <div className="w-full h-[276px] relative">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2 sm:gap-4 p-2 sm:p-6">
                {/* React */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-md border-t border-l border-black-400"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(97, 218, 251, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/react-original.svg" alt="React" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Next.js */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-md border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/next-original.svg" alt="Next.js" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Tailwind CSS */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(6, 182, 212, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/tailwindcss-original.svg" alt="Tailwind CSS" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* TypeScript */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(49, 120, 198, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/typescript-original.svg" alt="TypeScript" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Express */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/express-original.svg" alt="Express" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Node.js */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(140, 200, 75, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/node-original.svg" alt="Node.js" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border border-black-300"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(77, 180, 98, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/mongodb-original.svg" alt="MongoDB" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Redux */}
                <motion.div
                  className="flex items-center justify-center p-2 sm:p-4 bg-black-200 rounded-lg border-b border-r border-black-400"
                  whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(118, 74, 188, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <img src="assets/framer-original.svg" alt="Redux" className="h-8 w-8 sm:h-10 sm:w-10" />
                </motion.div>
              </div>
            </div>

            <motion.div variants={itemVariants}>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-4" variants={itemVariants}>
          <div className="grid-container">
            <motion.div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
            >
              <DotLottieReact
                src="assets/world.lottie"
                loop
                autoplay
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Sri Lanka and open to remote work worldwide.</p>
              <a href="#contact" className="w-fit">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-2 xl:row-span-3" variants={itemVariants}>
          <div className="grid-container">
            <motion.img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.div variants={itemVariants}>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn't just my
                profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-1 xl:row-span-2" variants={itemVariants}>
          <div className="grid-container">
            <motion.img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="grid-subtext text-center">Contact me</p>
              <motion.div
                className="copy-container"
                onClick={handleCopy}
                whileTap={{ scale: 0.95 }}
              >
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mhdmusthak582@gmail.com</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;