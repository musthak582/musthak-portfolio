import { useState } from 'react';
import { motion } from 'framer-motion';
import { workExperiences } from '../../public/constants/index.js';

const WorkExperience = () => {
  const [activeTech, setActiveTech] = useState(null);

  // Tech experience levels (percentage)
  const techLevels = {
    'React.js': 80,
    'Express.js': 60,
    'Node.js': 40,
    'MongoDB': 20
  };

  // Enhanced emoji animations
  const techEmojis = {
    'React.js': {
      emoji: '👊',
      animation: {
        rotate: [0, -10, 10, 0],
        scale: [1, 1.3, 1.1],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }
      }
    },
    'Express.js': {
      emoji: '🤘',
      animation: {
        rotate: [0, 8, -8, 0],
        y: [0, -4, 0],
        scale: [1, 1.3, 1.1],
        transition: {
          duration: 1,
          repeat: Infinity
        }
      }
    },
    'Node.js': {
      emoji: '✌️',
      animation: {
        scale: [1, 1.25, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: 1.2,
          repeat: Infinity
        }
      }
    },
    'MongoDB': {
      emoji: '🖐️',
      animation: {
        y: [0, -3, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.2, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  // Animation variants for other elements
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
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      className="c-space my-20"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="w-full text-white-600">
        <motion.p
          className="head-text"
          variants={itemVariants}
        >
          My Tech Proficiency
        </motion.p>

        <div className="work-container">
          {/* Vertical/Horizontal Bar Container */}
          <motion.div
            className="work-canvas"
            variants={itemVariants}
          >
            {/* Background track - changes orientation based on screen size */}
            <div className="hidden lg:flex h-full w-8 relative  flex-col items-center">
              <div className="absolute h-full w-1 bg-black-500 rounded-full" />
              <motion.div
                className="absolute bottom-0 w-1 bg-[#4ade80] rounded-full"
                initial={{ height: 0 }}
                animate={{
                  height: activeTech ? `${techLevels[activeTech]}%` : '0%'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {Object.entries(techLevels).map(([tech, percent]) => (
                <motion.div
                  key={tech}
                  className="absolute text-2xl cursor-default"
                  style={{ bottom: `${percent}%` }}
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{
                    scale: activeTech === tech ? [1, 1.3, 1.1] : 0.8,
                    opacity: !activeTech || activeTech === tech ? 1 : 0.7,
                    ...(activeTech === tech ? techEmojis[tech].animation : {})
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    ...(activeTech === tech ? techEmojis[tech].animation.transition : {})
                  }}
                >
                  {techEmojis[tech].emoji}
                </motion.div>
              ))}
            </div>

            {/* Horizontal version for mobile */}
            <div className="lg:hidden w-full h-8 relative flex items-center">
              <div className="absolute w-full h-1 bg-black-500 rounded-full" />
              <motion.div
                className="absolute left-0 h-1 bg-[#4ade80] rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: activeTech ? `${techLevels[activeTech]}%` : '0%'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {Object.entries(techLevels).map(([tech, percent]) => (
                <motion.div
                  key={tech}
                  className="absolute text-2xl cursor-default"
                  style={{ left: `${percent}%` }}
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{
                    scale: activeTech === tech ? [1, 1.3, 1.1] : 0.8,
                    opacity: !activeTech || activeTech === tech ? 1 : 0.7,
                    ...(activeTech === tech ? techEmojis[tech].animation : {})
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    ...(activeTech === tech ? techEmojis[tech].animation.transition : {})
                  }}
                >
                  {techEmojis[tech].emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="work-content"
            variants={itemVariants}
          >
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item) => (
                <motion.div
                  key={item.id}
                  onHoverStart={() => setActiveTech(item.name)}
                  onHoverEnd={() => setActiveTech(null)}
                  className="work-content_container group"
                  whileHover={{
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    y: -3
                  }}
                  variants={itemVariants}
                >
                  <motion.div
                    className="flex flex-col h-full justify-start items-center py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="work-content_logo">
                      <motion.img
                        className="w-full h-full"
                        src={item.icon}
                        alt={item.name}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring" }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="sm:p-5 px-2.5 py-5"
                    initial={{ x: 10 }}
                    whileInView={{ x: 0 }}
                  >
                    <motion.p
                      className="font-bold text-white-800"
                      animate={{
                        color: activeTech === item.name ? '#4ade80' : '#ffffff'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.p>
                    <motion.p
                      className="text-gray-400 group-hover:text-white"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.title}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;