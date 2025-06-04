import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { myProjects } from '../../public/constants/index.js';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const projectCount = myProjects.length;

  const handleNavigation = (navDirection) => {
    setDirection(navDirection === 'next' ? 1 : -1);
    setSelectedProjectIndex((prevIndex) => {
      return navDirection === 'previous'
        ? prevIndex === 0 ? projectCount - 1 : prevIndex - 1
        : prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  // Animation variants
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
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // New professional slider animation
  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-50%' : '50%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -20 : 20,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  // Text animations remain the same
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(4px)'
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const descriptionWords = currentProject.desc.split(' ');

  return (
    <section className="c-space my-20" id="work">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className="head-text mb-12" variants={itemVariants}>
          My Selected Work
        </motion.h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full">
          {/* Project Info Column */}
          <motion.div
            className="relative p-8 rounded-xl bg-black-200 border border-black-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="relative z-10 flex flex-col h-full">
              {/* Project Details */}
              <div className="flex-1">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={selectedProjectIndex}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="perspective-1000" // Add perspective for 3D effect
                  >
                    <motion.h3
                      className="text-2xl font-bold text-white mb-4"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {currentProject.title}
                    </motion.h3>

                    <motion.div
                      className="text-gray-300 mb-4"
                      initial="hidden"
                      animate="visible"
                    >
                      {descriptionWords.map((word, i) => (
                        <motion.span
                          key={i}
                          variants={paragraphVariants}
                          custom={i}
                          style={{ display: 'inline-block', marginRight: '5px' }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation (unchanged) */}
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  onClick={() => handleNavigation('previous')}
                  className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>

                <div className="flex flex-col sm:flex-row gap-4">
                  {currentProject.live && (
                    <motion.a
                      href={currentProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </motion.a>
                  )}

                  {currentProject.github && (
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.a>
                  )}
                </div>

                <motion.button
                  onClick={() => handleNavigation('next')}
                  className="p-2 rounded-full text-white hover:bg-gray-800/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Video Preview Column */}
          <motion.div
            className="relative rounded-xl h-96 lg:h-auto bg-black-200 border border-black-300 overflow-hidden"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedProjectIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 perspective-1000"
              >
                <div className="relative h-full w-full flex items-center justify-center bg-black-200">
                  <video
                    key={currentProject.texture}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full "
                  >
                    <source src={currentProject.texture} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;